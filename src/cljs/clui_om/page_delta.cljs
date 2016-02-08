(ns clui-om.page-delta
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [clojure.string :as s]
            [cljs.core.async :refer [put! <! >! chan sliding-buffer timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

;;*****************************************************************************
;;   APP STATE
;;*****************************************************************************
(def colors {:red "#FF0000"
             :green "#00FF00"
             :blue "#0000FF"
             :orange "#CC6600"
             :yellow "#CCCC00"
             :purple "#CC00CC"
             })

(def glyphs {:tower "tower" :phone "phone-alt"
            :bars "stats" :tree "tree-conifer"
            :magnet "magnet" :cloud "cloud"
            :leaf "leaf" :glass "glass"
            :cog "cog" :book "book"
            :flag "flag" :tag "tag"})

(def sizes  {:small 0.8 :medium 1 :large 1.5 :jumbo 2})


(defn random-icon
  "Get a randomly-generated map of icon settings"
  []
  (let [rand-color (rand-nth (keys colors))
        rand-size (rand-nth (keys sizes))
        rand-glyph (rand-nth (keys glyphs))]
    {:color rand-color
     :size rand-size
     :glyph rand-glyph
     :pinned false
     :entering true}))

(def app-state (atom {:greeting "Hello Delta!"
                      :sizes sizes
                      :size  (first (keys sizes))
                      :colors colors
                      :color (first (keys colors))
                      :glyphs glyphs
                      :glyph (first (keys glyphs))
                      :icons (vec (take 20 (repeatedly random-icon)))}))

(def ALPHA-ROOT (.getElementById js/document "alpha-div"))


;;*****************************************************************************
;; HELPER FUNCTIONS
;;*****************************************************************************

(defn icon-outer-props
  [{:keys [entering exiting]} state]
  (let [enter (if entering " enterLeft")
        exit (if exiting " exitLeft")
        stable (if (and (not entering) (not exiting)) " onStage")]
    (clj->js {:className (str "iconOuter" enter exit stable)})))

(defn icon-inner-style
  [{:keys [size color pinned]} state]
  (let [hovering (state :hovering)
        htmlcolor (color colors)
        startsize (size sizes)
        final-size (if (or pinned hovering) (* 3 startsize) startsize)
        final-background (if pinned htmlcolor "transparent")
        final-color (if pinned "#000000" htmlcolor)]
    {:border (str final-size "px solid " final-color)
     :backgroundColor final-background}))

(defn icon-style
  [{:keys [size color pinned]} state]
  (let [hovering (state :hovering)
        htmlcolor (color colors)
        fontsize (size sizes)
        final-color (if pinned "#000000" htmlcolor)]
    {:color final-color
     :fontSize (str fontsize "em")}))

(defn icon-classes
  [{:keys [glyph]} state]
  (let [hovering (state :hovering)
        final-glyph (glyphs glyph)
        final-anim (if hovering "pulse" "bigEntrance")] 
    (str "glyphicon glyphicon-" final-glyph " " final-anim)))

(defn sprite-dims
  "Generate a map with the appropriate CSS for an object of the given
  x and y coordinates, with the given width (w) and height (h)"
  [x y w h]
  {:width w
   :minWidth w
   :height h
   :minHeight h
   :left x
   :top y
   :position "absolute"})

(defn generate-new-icon
  "Get the map of settings for a new icon based on the app.
   The app should be deref'd (or not!) before sending it as an argument,
   because only the calling function has any clue whether or not we are
   in the render phase."
  [app]
  (let [new-color (:color app)
        new-size (:size app)
        new-glyph (:glyph app)
        msg (str "(new-icon):: using " new-color ", " new-glyph ", " new-size)]
    (.log js/console msg) 
    {:color new-color
     :size new-size
     :glyph new-glyph
     :pinned false
     :entering true}))

(defn update-pinned
  "Given a list of target icons, a keyword and a new value, return an updated
  vector with that kw updated for each icons, but only when :pinned is truthy"
  [icons kw new]
  (mapv #(if (:pinned %) (assoc % kw new) %) icons))



;;*****************************************************************************
;;   Om Components
;;*****************************************************************************

(defn icon
  "A component which displays a bootstrap icon at an arbitrary size and color.
  The main initial behavior will be an entry and exit animation. Later on we may
  upgrade it to add the ability to be selected, so that the main DELETE toolbar
  button deletes all of the selected icons."
  [cursor owner opts]
  (reify
    om/IInitState
    (init-state [_]
      {:hovering false
       :clicks (chan)
       :over (chan)
       :out (chan)})
    om/IWillMount
    (will-mount  [_]
      (let [clicks (om/get-state owner :clicks)
            over (om/get-state owner :over)
            out (om/get-state owner :out)]
        (go (loop []
              (let [_ (<! clicks)
                    current (:pinned @cursor)]
                (om/update! cursor :pinned (not current))
                ;(.log js/console "pinned: " (:pinned @cursor))
                (recur))))
        (go (loop []
              (let [_ (<! over)]
                (om/set-state! owner :hovering true)
                ;(.log js/console "hovering ON")
                (recur))))
        (go (loop []
              (let [_ (<! out)]
                (om/set-state! owner :hovering false)
                ;(.log js/console "hovering OFF")
                (recur))))))
    om/IRenderState
    (render-state [_ {:keys [clicks over out] :as state}]
      (dom/div (icon-outer-props cursor state)
               (dom/div (clj->js {:className "iconInner"
                                  :onClick #(put! clicks %)
                                  :onMouseOver #(put! over %)
                                  :onMouseOut #(put! out %)
                                  :style (icon-inner-style cursor state)})
                        (dom/div #js {:className "iconCell"}
                                 (dom/span (clj->js {:className (icon-classes cursor state)
                                                     :style (icon-style cursor state)}))))))))

(defn parse-choice [e channel]
  (let [choice (-> e .-target .-value)
        kw (keyword choice)]
    (.log js/console (str "(fn parse-choice):: " kw))
    (put! channel kw)))

(defn chooser
  "A component that takes a map of choices as the cursor, along with a
   core.async channel inside the options map. The component shows a
   complete HTML SELECT element with all of the choices. When the user
   makes a selection, the appropriate keyword is placed on the channel."
  [choices owner {:keys [channel]}]
  (reify
    om/IRender
    (render [_]
      (apply dom/select #js {:onChange #(parse-choice % channel)}
             (map #(dom/option (clj->js {:value (name %)})
                               (s/capitalize (name %)))
                  (keys choices))))))

(defn toolbar
  "A component that displays a set of controls for this demonstration, composed
  of several choosers (one each for color, icon type, and size, plus two
  additional ones for the type of entrance and exit animations), an ADD
  button (which adds an icon of that type to the global app state), and a DELETE
  button (which only appears when the global app state has >0 icons, and which
  always deletes the last icon. Later on we may make the delete button more
  sophisticated (i.e. remaining disabled unless at least one icon is selected,
  and then deleting all of the selected icons at once)."
  [cursor owner opts]
  (reify
    om/IInitState
    (init-state [_]
      {:glyph-chan (chan)
       :color-chan (chan)
       :size-chan (chan)
       :add-chan (chan)
       :del-chan (chan)
       :all-chan (chan)
       :none-chan (chan)
       :rand-chan (chan)})
    om/IWillMount
    (will-mount [_]
      (let [{:keys [glyph-chan color-chan size-chan add-chan rand-chan
                    del-chan all-chan none-chan]} (om/get-state owner)]
        (go (loop []
              (let [choice (<! glyph-chan)]
                (.log js/console "(toolbar):: glyph choice: " (str choice))
                (om/update! cursor :glyph choice)
                (om/transact! cursor :icons #(update-pinned % :glyph choice))
                (recur))))
        (go (loop []
              (let [choice (<! color-chan)]
                (.log js/console "(toolbar):: color choice: " (str choice))
                (om/update! cursor :color choice)
                (om/transact! cursor :icons #(update-pinned % :color choice))
              (recur))))
        (go (loop []
              (let [choice (<! size-chan)]
                (.log js/console "(toolbar):: size choice: " (str choice))
                (om/update! cursor :size choice)
                (om/transact! cursor :icons #(update-pinned % :size choice))
                (recur))))
        (go (loop []
              (let [_ (<! add-chan)
                    new-icon (generate-new-icon @cursor)]
                (.log js/console "(toolbar):: user clicked add")
                (om/transact! cursor :icons #(conj % new-icon))
                (recur))))
        (go (loop []
              (let [_ (<! rand-chan)
                    new-icon (random-icon)]
                (.log js/console "(toolbar):: user clicked random")
                (om/transact! cursor :icons #(conj % new-icon))
                (recur))))
        (go (loop []
              (let [_ (<! del-chan)]
                (.log js/console "(toolbar):: user clicked del")
                ;; first sweep: add the exiting flag to the doomed
                (om/transact! cursor :icons (fn [icons]
                                              (mapv #(if (:pinned %)
                                                      (merge % {:exiting true :entering false})
                                                      (merge % {:exiting false :entering false}))
                                                    icons)))
                ;; then a delay with timeout:
                (<! (timeout 900)) ;; just hang out and do nothing
                ;; and then finally, remove those items from the app state
                ;; use filterv, because lazy sequences do not belong inside cursors!
                (om/transact! cursor :icons #(filterv (complement :pinned) %))
                (recur))))
        (go (loop []
              (let [_ (<! all-chan)]
                (.log js/console "(toolbar):: user clicked all")
                (om/transact! cursor :icons (fn [icons]
                                              (mapv #(assoc % :pinned true) icons)))
                (recur))))
        (go (loop []
              (let [_ (<! none-chan)]
                (.log js/console "(toolbar):: user clicked none")
                (om/transact! cursor :icons (fn [icons]
                                              (mapv #(assoc % :pinned false) icons)))
                (recur))))))
    om/IRenderState
    (render-state [_ {:keys [glyph-chan color-chan size-chan rand-chan
                             add-chan del-chan all-chan none-chan]}]
      (dom/div #js {:className "toolbar"}
               (om/build chooser (:glyphs cursor) {:opts {:channel glyph-chan}})
               (om/build chooser (:colors cursor) {:opts {:channel color-chan}})
               (om/build chooser (:sizes cursor) {:opts {:channel size-chan}})
               (dom/button #js {:onClick #(put! add-chan %)} "Add")
               (dom/button #js {:onClick #(put! rand-chan %)} "Rand")
               (dom/button
                (let [disabled (= 0 (count (filter :pinned (:icons cursor))))
                      base (when disabled {:disabled true :style {:color "#CCCCCC"}})] 
                  (clj->js (merge base {:onClick #(put! del-chan %)})))
                "Delete")
               (dom/button #js {:onClick #(put! all-chan %)} "All")
               (dom/button #js {:onClick #(put! none-chan %)} "None")))))

(defn iconbox
  "A component that displays an arbitrary number of icons."
  [cursor owner opts]
  (reify
    om/IRender
    (render [_]
      (apply dom/div #js {:className "iconbox"}
               (om/build-all icon (:icons cursor))))))

(defn main-widget
  "A component that displays a toolbar up top, and an icon-box down below."
  [app owner opts]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "main-widget"} 
               (om/build toolbar app)
               (om/build iconbox app)))))


;;*****************************************************************************
;;   Main
;;*****************************************************************************

(defn ^:export main
  "Initialize page delta"
  []
  (let [msg "main():: initializing page-delta.cljs"]
    (.log js/console msg)
    (om/root main-widget app-state {:target ALPHA-ROOT})))

