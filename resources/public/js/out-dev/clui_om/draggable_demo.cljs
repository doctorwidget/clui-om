(ns clui-om.draggable-demo
 (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [draggable.core :as dnd]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true])
  (:require-macros [cljs.core.async.macros :as am :refer [go go-loop alt!]]))

;; A straight-up port of the om-draggable demonstration page.

;; Unfortunately, as of Oct 2014 this package is not yet available as a Clojars
;; package, which means I had to fork the github repository, create a local
;; version of it, and then copy and paste (!) his source files into this
;; project. I put the main source file in as ``src/cljs/draggable/core.cljs``,
;; and then copied and pasted his example code into this file, modifying as
;; necessary to integrate with my setup. For example, the actual call to
;; (om/root) is now wrapped in my standard main() function, and the HTML host
;; page must call clui_om.draggable_demo.main(). 

;; Note that there is an undeclared API used by both draggable.core and this
;; file. The draggable component defined inside draggable.core wraps a
;; subcomponent under two keys:

;; :sub-com  should specify an Om component function of your choice
;; :sub-com-data should contain the cursor for that component.

;; The draggable component then maintains four key properties as local component
;; state: :rel-x, :rely-y, :hor-value and :ver-value. Those values are based on
;; the ``.-pageX`` and ``.-pageY`` properties of mouse movements. This means
;; that your :sub-com component can remain blissfully unaware of all dragging
;; issues, since that is handled entirely by the parent componet.

;; Also note the use of another de facto standard: the :comms property of the app
;; state, containing various mouse-related sub-maps, each of which offers
;; both a regular channel (via :ch) and a multi-enabled channel (via :mult).
;; These are also undeclared but standard parts of the API, expected and used
;; by both draggable.core and also the user.

;;******************************************************************************
;;  Channel Setup
;;******************************************************************************

;; Sliding-buffers overcomes some of the browser limitations around DnD
(def mouse-move-ch
  (chan (sliding-buffer 1)))

(def mouse-down-ch
  (chan (sliding-buffer 1)))

(def mouse-up-ch
  (chan (sliding-buffer 1)))

;; These channels will ultimately be attached to DOM listeners inside the main()
;; function at the bottom of this file.


;;******************************************************************************
;;  Settings and initial state
;;******************************************************************************

(def app-state (atom {:grid {:rows 20
                             :columns 20
                             :cell-size 250}
                      :snap-threshold 25
                      :colors (take 40 (cycle ["green" "blue" "purple" "red" "yellow" "black"]))
                      :block-sizes (repeatedly 40 #(+ 25 (rand-int 75)))
                      :comms {:mouse-move {:ch  mouse-move-ch
                                           :mult (async/mult mouse-move-ch)}
                              :mouse-up   {:ch  mouse-up-ch
                                           :mult (async/mult mouse-up-ch)}
                              :mouse-down {:ch  mouse-down-ch
                                           :mult (async/mult mouse-down-ch)}}}))

(def ALPHA-ROOT (.getElementById js/document "alpha-div"))


;;******************************************************************************
;;  Helper components for visualization
;;******************************************************************************

(defn grid [data owner opts]
  (reify
    om/IRender
    (render [_]
      (apply dom/div #js {:className "grid"}
             (doall (mapcat
                     #(do
                        (map (fn [x]
                               (dom/div #js {:style
                                             #js {:border-left-width   1
                                                  :border-top-width    0
                                                  :border-right-width  0
                                                  :border-bottom-width 1
                                                  :border-style "solid"
                                                  :border-color "#ccc"
                                                  :position "fixed"
                                                  :left x
                                                  :top %
                                                  :height (:cell-size data)
                                                  :width (:cell-size data)}}))
                             (range 0 (* (:columns data) (:cell-size data)) (:cell-size data))))
                     (range 0 (* (:rows data) (:cell-size data)) (:cell-size data))))))))

(defn block [data owner opts]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:style #js {:width  (:size data)
                                :height (:size data)
                                :background-color (:color data)
                                :borderRadius 200
                                :opacity 0.5}}
               (:content data)))))

(defn make-guideline [& [x y ow oh]]
  (let [longer (+ 300 (rand-int 600))
        shorter 2
        left (rand-int 600)
        top (rand-int 600)
        [w h] (if (pos? (rand-int 2))
                [longer shorter]
                [shorter longer])]
    {:width (or ow w)
     :height (or oh h)
     :top (or y top)
     :left (or x left)}))

(def guidelines
                                        ;(repeatedly 10 make-guideline)
  [(make-guideline 50 50 2 500)])

(defn guideline [data owner opts]
  (reify
    om/IRender
    (render [_]
      (let [guideline (:guideline data)]
        (dom/div #js {:style #js {:width  (:width guideline)
                                  :height (:height guideline)
                                  :top    (:top guideline)
                                  :left   (:left guideline)
                                  :position "absolute"
                                  :background-color "black"
                                  :opacity 0.8}})))))

;;******************************************************************************
;;  Main entry-point
;;******************************************************************************

(defn drag-app [app owner opts]
  (reify
    om/IRender
    (render [_]
      (dom/div nil
               (om/build grid (:grid app) opts)
               (apply dom/div #js {:className "guidelines"}
                      (map #(om/build guideline (assoc app :guideline %)) guidelines))
               (apply dom/div #js {:id "free-drag"}
                      (map
                       #(om/build dnd/draggable (assoc app
                                                  :top (+ (rand-int 20) 50)
                                                  :left (+ (rand-int 20) 70)
                                                  :color %
                                                  :sub-com block
                                                  :sub-com-data {:color %1
                                                                 :size %2})
                                  {:opts {:dragger-fn (fn [owner] (dnd/free-drag owner))}})
                       (:colors app)
                       (:block-sizes app)))
               (apply dom/div #js {:id "grid-snap-drag"}
                      (map
                       #(om/build dnd/draggable (assoc app
                                                  :top (+ (rand-int 20) 50)
                                                  :left (+ (rand-int 20) 700)
                                                  :color %
                                                  :sub-com block
                                                  :sub-com-data {:color %1
                                                                 :size %2})
                                  {:opts {:dragger-fn (fn [owner _]
                                                        (dnd/grid-snap-drag owner
                                                                            (get-in app [:grid :cell-size])
                                                                            (:snap-threshold app)))}})
                       (:colors app)
                       (:block-sizes app)))
               (apply dom/div #js {:id "grid-snap-container"}
                      (map
                       #(om/build dnd/draggable (assoc app
                                                  :top (+ (rand-int 20) 500)
                                                  :left (+ (rand-int 20) 700)
                                                  :color %
                                                  :sub-com block
                                                  :sub-com-data {:color %1
                                                                 :size %2})
                                  {:opts {:dragger-fn (fn [owner _]
                                                        (dnd/guideline-snap-drag owner (:snap-threshold app)))}})
                       (:colors app)
                       (:block-sizes app)))))))

(defn ^:export main
  "Initialize draggable-demo page, now with more om-draggable code"
  []
  (let [msg "main():: initializing draggable-demo.cljs"]
    (.log js/console msg)
    (js/window.addEventListener "mousedown" #(put! mouse-down-ch %))
    (js/window.addEventListener "mouseup"   #(put! mouse-up-ch   %))
    (js/window.addEventListener "mousemove" #(put! mouse-move-ch %))
    (om/root drag-app app-state {:target ALPHA-ROOT
                                 :shared {:guidelines guidelines}})))
