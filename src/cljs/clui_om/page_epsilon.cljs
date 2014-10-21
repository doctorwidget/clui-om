(ns clui-om.page-epsilon
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [clojure.string :as s]
            [clui-om.misc.music-theory :as m]
            [cljs.core.async :refer [put! <! >! chan sliding-buffer timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

;; This page demonstrates using the WebAudio API for three purposes:
;; 1) playing a preset series of notes with some synthesizer tricks. This
;;    is done in the joy.music namespace, a straight up copy-paste from
;;    Fogus's Joy of Clojure, second edition. 
;; 2) Using Om to create a simple piano keyboard simulator. This is done
;;    here in this file.
;; 3) TODO: load one of several static music files from the server and play
;;    them when the user requests them. This is probably the most common
;;    use case for your purposes: basically just integrating sound assets
;;    into web applications without resorting to either the Flash plugin or
;;    <audio> elements on the page.


;;*****************************************************************************
;; Utility & Helpers
;;*****************************************************************************



;;*****************************************************************************
;; App State & other constants
;;*****************************************************************************

(def app-state (atom {:notes (m/chromatic-scale)})) 

(def ALPHA-ROOT (.getElementById js/document "alpha-div"))


;;*****************************************************************************
;; Components and helpers
;;*****************************************************************************

(defn piano-key-props
  "Get the list of props for a piano key"
  [{:keys [note cent freq offset] :as cursor}
   {:keys [pressure motion hovering active] :as state}]
  (let [minor (m/minor? note)
        left (* offset 6)
        classes {:className (str "pianoKey"
                                 (if minor " minor")
                                 (if hovering " glow")
                                 (if active " active"))}
        handlers {:onMouseDown #(put! pressure :down)
                  :onMouseUp #(put! pressure :up)
                  :onMouseOver #(put! motion :over)
                  :onMouseOut #(put! motion :out)
                  }
        styles {:position "absolute"
                :left (str left "em")}
        final (merge classes handlers {:style styles})]
    (clj->js final)))


(defn piano-key
  "Om component representing one piano key"
  [cursor owner opts]
  (reify
    om/IInitState
    (init-state [_]
      {:hovering false
       :active false
       :pressure (chan)
       :motion (chan)})
    om/IWillMount
    (will-mount [_]
      ;; previous pages in this project have used one channel per event type,
      ;; but this time we're going to try using just two channels. Four 
      ;; different listeners will put simple :keywords onto the channels.
      (let [pressure (om/get-state owner :pressure)
            motion (om/get-state owner :motion)
            label (:note cursor)]
        (go (loop []
              (let [p (<! pressure)]
                (if (= p :down)
                  (do 
                    (.log js/console (str "Mouse press @ " label))
                    (om/set-state! owner :active true))
                  (do 
                    (.log js/console (str  "Mouse raised @ " label))
                    (om/set-state! owner :active false)))
                (recur))))
        (go (loop []
              (let [m (<! motion)]
                (if (= m :over)
                  (do 
                    (.log js/console (str  "Mouse over @ " label))
                    (om/set-state! owner :hovering true))
                  (do 
                    (.log js/console (str  "Mouse out @ " label))
                    (om/set-state! owner :hovering false)))
                (recur))))))
    om/IRenderState
    (render-state [_ {:keys [hovering] :as state}]
      (dom/div (piano-key-props cursor state)
               (dom/div #js {:className "noteName"} 
                        (s/upper-case (str (name (cursor :note)))))))))

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
