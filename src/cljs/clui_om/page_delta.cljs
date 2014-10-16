(ns clui-om.page-delta
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan sliding-buffer timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

;;*****************************************************************************
;;   APP STATE
;;*****************************************************************************

(def app-state (atom {:greeting "Hello World!"}))

(def ALPHA-ROOT (.getElementById js/document "alpha-div"))


;;*****************************************************************************
;; HELPER FUNCTIONS
;;*****************************************************************************

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

(defn temp [cursor owner opts]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "vanilla-border"}
              (:greeting cursor)))))

(defn main-widget [app owner opts]
  (reify
    om/IRender
    (render [_]
      (om/build temp app-state))))


;;*****************************************************************************
;;   Main
;;*****************************************************************************

(defn ^:export main
  "Initialize page delta"
  []
  (let [msg "main():: initializing page-delta.cljs"]
    (.log js/console msg)
    (om/root main-widget app-state {:target ALPHA-ROOT})))

