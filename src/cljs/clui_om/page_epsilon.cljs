(ns clui-om.page-epsilon
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [clui-om.misc.music-theory :as m]
            [cljs.core.async :refer [put! <! >! chan sliding-buffer timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))


;;*****************************************************************************
;; Utility & Helpers
;;*****************************************************************************




(defn piano-key-props
  "Get the list of props for a piano key"
  [{:keys [note cent freq offset] :as cursor}]
  (let [minor (m/minor? note)
        left (* offset 6)
        classes {:className (str "pianoKey" (if minor " minor"))}
        styles {:position "absolute"
                :left (str left "em")}
        final (merge classes {:style styles})]
    (clj->js final)))


;;*****************************************************************************
;; App State & other constants
;;*****************************************************************************

(def app-state (atom {:notes (m/chromatic-scale)})) 

(def ALPHA-ROOT (.getElementById js/document "alpha-div"))


;;*****************************************************************************
;; Components
;;*****************************************************************************

(defn piano-key
  "Representation of one piano key"
  [cursor owner opts]
  (reify
    om/IRenderState
    (render-state [_ {:keys [hovering] :as state}]
      (dom/div (piano-key-props cursor)
               (dom/div #js {:className "noteName"} 
                         (str (cursor :note)))))))

(defn piano-bar
    "A container for a bunch of piano keys"
    [app owner opts]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "pianoBar"}
               (dom/div #js {:className "pianoOuter"}                        
                        (apply dom/div #js {:className "pianoInner"}
                               (om/build-all piano-key (:notes app))))))))

(defn main-widget
  [app owner opts]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "mainWidget"}
               (dom/div #js {:className "mainInner"}
                        (om/build piano-bar app))))))


;;*****************************************************************************
;; Main
;;*****************************************************************************
(defn ^:export main
  "Main entry point for page epsilon"
  []
  (let [msg "(main):: page_epsilon (main) function..."]
    (.log js/console msg)
    (om/root main-widget app-state {:target ALPHA-ROOT})))
