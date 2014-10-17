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
             :orange "#FFCC00"
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

(def app-state (atom {:greeting "Hello Delta!"
                      :sizes sizes
                      :size  (first (keys sizes))
                      :colors colors
                      :color (first (keys colors))
                      :glyphs glyphs
                      :glyph (first (keys glyphs))
                      :icons [{:glyph :tower :size 1 :color :orange :pinned false}
                              {:glyph :phone :size 1.5 :color :purple :pinned false}
                              {:glyph :bars :size 2 :color :yellow :pinned false}
                              {:glyph :tree :size 1.5 :color :green :pinned false}]}))

(def ALPHA-ROOT (.getElementById js/document "alpha-div"))


;;*****************************************************************************
;; HELPER FUNCTIONS
;;*****************************************************************************



(defn icon-inner-style
  [{:keys [size color pinned]} owner]
  (let [hovering (om/get-state owner :hovering)
        htmlcolor (color colors)
        final-size (if (or pinned hovering) (* 3 size) size)
        final-background (if pinned htmlcolor "transparent")
        final-color (if pinned "#000000" htmlcolor)] 
    {:border (str final-size "px solid " final-color)
     :background-color final-background}))

(defn icon-style
  [{:keys [size color pinned]} owner]
  (let [hovering (om/get-state owner :hovering)
        htmlcolor (color colors)
        final-color (if pinned "#000000" htmlcolor)]
    {:color final-color
     :font-size (str size "em")}))

(defn icon-classes
  [{:keys [glyph]} owner]
  (let [hovering (om/get-state owner :hovering)
        final-glyph (glyphs glyph)
        final-anim (if hovering "tossing" "bigEntrance")] 
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
      (let [htmlcolor (colors (:color cursor))]
        (dom/div #js {:className "iconOuter"}
                 (dom/div (clj->js {:className "iconInner"
                                    :onClick #(put! clicks %)
                                    :onMouseOver #(put! over %)
                                    :onMouseOut #(put! out %)
                                    :style (icon-inner-style cursor owner)})
                          (dom/div #js {:className "iconCell"}
                                   (dom/span (clj->js {:className (icon-classes cursor owner)
                                                       :style (icon-style cursor owner)})))))))))

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
       :del-chan (chan)})
    om/IWillMount
    (will-mount [_]
      (let [{:keys [glyph-chan color-chan size-chan add-chan del-chan]} (om/get-state owner)]
        (go (loop []
              (let [choice (<! glyph-chan)]
                (.log js/console "(toolbar):: glyph choice: " (str choice))
                (om/update! cursor :glyph choice)
                (recur))))
        (go (loop []
              (let [choice (<! color-chan)]
                (.log js/console "(toolbar):: color choice: " (str choice))
                (om/update! cursor :color choice)
                (recur))))
        (go (loop []
              (let [choice (<! size-chan)]
                (.log js/console "(toolbar):: size choice: " (str choice))
                (om/update! cursor :size choice)
                (recur))))
        (go (loop []
              (let [_ (<! add-chan)]
                (.log js/console "(toolbar):: user clicked add")
                (recur))))
        (go (loop []
              (let [_ (<! del-chan)]
                (.log js/console "(toolbar):: user clicked del")
                (recur))))))
    om/IRenderState
    (render-state [_ {:keys [glyph-chan color-chan size-chan add-chan del-chan]}]
      (dom/div #js {:className "toolbar"}
               (om/build chooser (:glyphs cursor) {:opts {:channel glyph-chan}})
               (om/build chooser (:colors cursor) {:opts {:channel color-chan}})
               (om/build chooser (:sizes cursor) {:opts {:channel size-chan}})
               (dom/button #js {:onClick #(put! add-chan %)} "Add")
               (dom/button
                (let [disabled (= 0 (count (filter :pinned (:icons cursor))))
                      base (when disabled {:disabled true :style {:color "#CCCCCC"}})] 
                  (clj->js (merge base {:onClick #(put! del-chan %)})))
                "Delete")))))

(defn iconbox
  "A component that displays an arbitrary number of icons."
  [cursor owner opts]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "iconbox"}
          (into-array (om/build-all icon (:icons cursor)))))))

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

