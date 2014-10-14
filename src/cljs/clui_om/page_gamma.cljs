(ns clui-om.page-gamma
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan sliding-buffer timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))


;;;; HELPER FUNCTIONS

;This first helper exists because careful experimentation proves that
;passing React/Om events through a core.async channel breaks them!
;Pre-channel, accessing  their properties works as expected, with no
;surprises of any kind. But post-channel they have become opaque
;[Object objects] with none of the expected properties or methods.

;Note that this bug is **only** evident  for events that have been
;passed through the whole Om/React wrapper chain! It does **not**
;occur with raw JavaScript events!

;; In summary:
;; React/Om events + core.async channel = sad panda!
;; Raw JavaScript events + core.async channel = works great!

(defn evt->clj [e]
  "Get a subset of a raw JavaScript events fields as a ClojureScript map. "
  {:raw e
   :current-target (.-currentTarget e)
   :target (.-target e)
   :timestamp (.-timestamp e)
   :evt-type (.-type e)
   :client-x (.-clientX e)
   :client-y (.-clientY e)
   :screen-x (.-screenX e)
   :screen-y (.-screenY e)
   :page-x (.-pageX e)
   :page-y (.-pageY e)})


(defn echo-evt
  ([e] (echo-evt e "..." false))
  ([e msg] (echo-evt e msg false))
  ([e msg all]
    (let [r (:raw e)]
      (.log js/console (str msg ": "))
      (if all (.log js/console (str "Raw React JS event: " r)))
      (if all (.log js/console (str "Wrapped Cljs event: " e)))
      (if all (.log js/console (str "Event Type (js) " (.-type r))))
      (.log js/console (str "Event Type (clj) " (:evt-type e)))
      (if all (.log js/console (str "ClientXY (js) " (.-clientX r) ", " (.-clientY r))))
      (.log js/console (str "ClientXY (clj) " (:client-x e) ", " (:client-y e)))
      (if all (.log js/console (str "PageXY (js) " (.-pageX r) ", " (.-pageY r))))
      (.log js/console (str "PageXY (clj) " (:page-x e) ", " (:page-y e)))
      (if all (.log js/console (str "ScreenXY (js) " (.-screenX r) ", " (.-screenY r))))
      (if all (.log js/console (str "ScreenXY (clj " (:screen-x e) ", " (:screen-y e)))))))


(defn sprite-dims [x y w h]
  ;; Generate a map with the appropriate CSS for an object of the given
  ;; x and y coordinates, with the given width (w) and height (h)
  {:width w
   :minWidth w
   :height h
   :minHeight h
   :left x
   :top y
   :position "absolute"})


;;;; APP STATE
(def app-state (atom {:board {:width 800
                              :height 600
                              :mouse-move (chan (sliding-buffer 1))
                              :sprites [{:x 300 :y 200 :w 60 :h 30 :type :morph-sprite}
                                        {:x 100 :y 100 :w 120 :h 160 :type :draggable-sprite
                                         :title "Click to drag me" :message "Hello world!"
                                         :prior-drag-loc [nil nil]}
                                        ]}}))

(def ALPHA-ROOT (.getElementById js/document "alpha-div"))

(defn morph-dims [x y w h morphed]
  (let [grow 2
        bigw (* grow w)
        bigh (* grow h)
        basemap (sprite-dims x y w h)]
    (if morphed
      (merge basemap  {
                       :width bigw
                       :minWidth bigw
                       :height bigh
                       :minHeight bigh
                       :left (- x (/ (- bigh h) 2))
                       :top (- y (/ (- bigw w) 2))
                       })
        basemap)))

;; multiple different sprite implementations
(defmulti sprite :type)

(defmethod sprite :morph-sprite [cursor owner opts]
  "A morph-sprite has basic sprite-like behavior, and changes when
   it is being hovered or over, or is `pinned` by clicking on it."
  (reify
    om/IInitState
    (init-state [_]
      {:pinned false
       :hovering false})
    om/IRenderState
    (render-state [_ {:keys [dragging hovering pinned]}]
      (let [x (:x cursor) y (:y cursor) w (:w cursor) h (:h cursor)]
        (dom/div #js {:className (str "morphSprite"
                                      (if hovering " hovering" ""))
                      :style (clj->js (merge {:textAlign "center"}
                                             (morph-dims x y w h (or hovering pinned))))
                      :onMouseOver #(om/set-state! owner :hovering true)
                      :onMouseOut #(om/set-state! owner :hovering false)
                      :onClick #(om/set-state! owner :pinned (not pinned))}
                 (dom/span #js {:className "spriteLabel"
                                :style #js {:width "100%"
                                            :minWidth "100%"}}
                           "I morph."))))))

(defmethod sprite :draggable-sprite [cursor owner opts]
  "A draggable-sprite can be dragged by its titlebar"
  (reify
     om/IInitState
    (init-state [_]
      ;; Note that our owner should supply us with a :mouse-move channel
      ;; as part of an :init-state map. This example is simple enough that
      ;; we could just as easily hard-code one here, but this is a good
      ;; example of how to pass down a shared resource from a higher tier.
      {:dragging false
       :drag-on (chan)
       :drag-off (chan)
       })
    om/IWillMount
    (will-mount [_]
       "Set up loops to handle all of the drag behaviors for this element."
      (let [dragging (om/get-state owner :dragging)
            drag-on (om/get-state owner :drag-on)
            drag-off (om/get-state owner :drag-off)
            mouse-move (om/get-state owner :mouse-move)]
        (go (loop []
              (let [{:keys [page-x page-y evt-type]} (<! drag-on)]
                (.log js/console "Dragging is now on (" evt-type ")")
                (om/set-state! owner :dragging true)
                (om/update! cursor :prior-drag-loc [page-x page-y])
                (recur))))
        (go (loop []
              (let [{:keys [evt-type]} (<! drag-off)
                    [x, y] (:prior-drag-loc @cursor)]
                (.log js/console "Dragging is now off (" evt-type ")")
                (.log js/console "prior-drag-loc: [" x ", " y "]")
                (om/set-state! owner :dragging false)
                (recur))))
        (go (loop []
              (let [{:keys [page-x page-y evt-type]} (<! mouse-move)]
                (if (om/get-state owner :dragging)
                  (let [current-x (:x @cursor)
                        current-y (:y @cursor)
                        [old-drag-x old-drag-y] (:prior-drag-loc @cursor)
                        delta-x (- page-x old-drag-x)
                        delta-y (- page-y old-drag-y)
                        new-x (+ current-x delta-x)
                        new-y (+ current-y delta-y)]
                    (.log js/console "Mouse event (" evt-type ")")
                    (.log js/console "Dragging from " current-x ", " current-y " to " new-x ", " new-y)
                    (om/update! cursor (merge @cursor {:x new-x
                                                      :y new-y
                                                      :prior-drag-loc [page-x page-y]}))))
                (recur))))))
    om/IRenderState
    (render-state [_ {:keys [dragging drag-on drag-off mouse-move]}]
      (dom/div #js {:className "dragSprite"
                    :style (clj->js (sprite-dims (:x cursor)
                                                 (:y cursor)
                                                 (:w cursor)
                                                 (:h cursor)))
                    :onMouseDown #(put! drag-on (evt->clj %))
                    :onMouseUp #(put! drag-off (evt->clj %))
                    :onMouseOut #(put! drag-off (evt->clj %))
                    :onMouseMove #(put! mouse-move (evt->clj %))}
               (dom/div #js {:className "dragSpriteTitle" }
                        (:title cursor))
               (dom/div #js {:className "dragSpriteMessage"} (:message cursor))))))




(defn canvas [cursor owner opts]
  "A canvas should be born with a width, a height, and possibly some
  kind of background image."
  (reify
    om/IInitState
    (init-state [_]
      {:img nil
       :position "relative"})
    om/IRenderState
    (render-state [_ {:keys [img position]}]
      (let [width (:width cursor)
            height (:height cursor)
            sprites (:sprites cursor)]
        (apply dom/div #js {:className "canvasDiv"
                            :style #js {:width width
                                        :minWidth width
                                        :height height
                                        :minHeight height
                                        :position position}}
             (om/build-all sprite sprites {:init-state {:mouse-move (:mouse-move cursor)}}))))))


(defn main-widget [app owner opts]
  (reify
    om/IRender
    (render [_]
      (om/build canvas (:board app)))))


(defn ^:export main
  "Initialize page gamma"
  []
  (let [msg "main():: initializing page-gamma.cljs"
        page-chan (chan (sliding-buffer 1))]
    (.log js/console msg)
    (om/root main-widget app-state {:target ALPHA-ROOT})
    (.addEventListener js/window "click" (fn [e]
                                           (let [c (evt->clj e)]
                                             ;(echo-evt c "Page Event (Pre-Channel)" true)
                                             (put! page-chan c))))
    (go (loop []
      (let [e (<! page-chan)]
        (echo-evt e "Page Event (Post-Channel)")
        (recur))))))

