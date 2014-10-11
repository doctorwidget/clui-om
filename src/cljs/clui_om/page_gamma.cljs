(ns clui-om.page-gamma
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

  
(def app-state (atom {:board {:width 800
                              :height 600
                              :sprites [{:x 300 :y 200 :w 60 :h 30 :type :morph-sprite}
                                        {:x 100 :y 100 :w 120 :h 160 :type :draggable-sprite
                                         :title "Click to drag me" :message "Hello world!"}
                                        ]}}))

(def ALPHA-ROOT (.getElementById js/document "alpha-div"))

(defn sprite-dims [x y w h]
  {:width w
   :minWidth w
   :height h
   :minHeight h
   :left x
   :top y
   :position "absolute"
   })

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
      {:dragging false
       :pinned false
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
  "A draggable-sprite can be dragged by its titlebar (and *only* by
  its titlebar!"
  (reify
    om/IRenderState
    (render-state [_ {:keys [dragging]}]
      (dom/div #js {:className "dragSprite"
                    :style (clj->js (sprite-dims (:x cursor)
                                                 (:y cursor)
                                                 (:w cursor)
                                                 (:h cursor)))}
               (dom/div #js {:className "dragSpriteTitle"} (:title cursor))
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
             (om/build-all sprite sprites))))))

(defn main-widget [app owner opts]
  (reify
    om/IRender
    (render [_]
      (om/build canvas (:board app)))))


(defn ^:export main
  "Initialize page gamma"
  []
  (let [msg "main():: initializing page-gamma.cljs"]
    (.log js/console msg)
    (om/root main-widget app-state {:target ALPHA-ROOT})))
