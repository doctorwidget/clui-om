(ns clui-om.page-epsilon
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [cljs-http.client :as http]
            [clojure.string :as s]
            [clui-om.misc.music-theory :as m]
            [cljs.core.async :refer [put! <! >! chan sliding-buffer timeout]]
            [joy.music :as j]
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

(def make-once (memoize (fn [audio-api] (new audio-api))))

(defn oscillator-node
  "Takes a WebAudio context and a simple note map, and returns an Oscillator
  node from the the WebAudio API. The returned node is already hooked up to a
  compressor to prevent feedback, and to the AudioContext .-destination (i.e.
  to the speakers). All that remains to do is to call (.start) on it."
  [{:keys [freq]}]
  (if-let [audio-api (or (.-AudioContext js/window)
                         (.-webkitAudioContext js/window))]
    (let [ctx (make-once audio-api)
          compressor (.createDynamicsCompressor ctx) ; prevents feedback
          node (.createOscillator ctx)]
      (set! (-> node .-frequency .-value) freq)
      (.connect node compressor)
      ;; each AudioContext instances has one & only one **destination**
      ;; Think of it as the actual speakers. 
      (.connect compressor (.-destination ctx))
      ;; Finally, return the node so other code can turn it on & off
      node)))


(def track-names [:affirmative :beep :intercom :swoosh :working])

(defn get-tracks
  "Get a vector of the various audio tracks as Om-friendly sub-maps"
  [tracks]
  (reduce (fn [v k]
            (conj v {:title k :file (str (name k) ".mp3") :loaded false}))
       []
       tracks))


;;*****************************************************************************
;; App State & other constants
;;*****************************************************************************



(def app-state (atom {:notes (m/chromatic-scale)
                      :tracks (get-tracks track-names)})) 

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
       :motion (chan)
       :sound :silence})
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
                    (om/set-state! owner :active true)
                    (if (= :silence (om/get-state owner :sound))                      
                      (let [sound (oscillator-node @cursor)]
                        (om/set-state! owner :sound sound)
                        (.start sound))))
                  (do 
                    (om/set-state! owner :active false)
                    (let [sound (om/get-state owner :sound)]
                      (if (not= sound :silence)
                        (do (.stop sound)
                            (om/set-state! owner :sound :silence))))))
                (recur))))
        (go (loop []
              (let [m (<! motion)]
                (if (= m :over)
                  (do 
                    ;(.log js/console (str  "Mouse over @ " label))
                    (om/set-state! owner :hovering true))
                  (do 
                    ;(.log js/console (str  "Mouse out @ " label))
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

(defn juke-button
  "A component that provides a button to play a single audio file"
  [cursor owner opts]
  (reify
    om/IInitState
    (init-state [_]
      {:clicks (chan)})
    om/IWillMount
    (will-mount [_]
      (let [clicks (om/get-state owner :clicks)]
        (go (loop []
              (let [_ (<! clicks)
                    url (str "/audio/" (:file @cursor))]
                ;(.log js/console (str "Click on track " (:file @cursor)))
                (.log js/console (str "Requesting track: " url))
                (let [{:keys [status body headers]} (<! (http/get url))]
                  (.log js/console (str "Response Status: " status))
                  (.log js/console (str "Response Headers: " headers)))
                  
                
                (recur))))))
    om/IRenderState
    (render-state [_ {:keys [clicks] :as state}]
      (dom/div #js {:className "trackButton"}
               (dom/button #js {:onClick #(put! clicks :play)}
                           (str (:title cursor)))))))

(defn main-widget
  [app owner opts]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "mainWidget"}
               (dom/div #js {:className "mainInner"}
                        (om/build piano-bar app))
               (dom/hr nil)
               (dom/div #js {:className "joyDemo"}
                        (dom/div nil
                                 (dom/p nil "From: 'Joy of Clojure':")
                                 (dom/button #js {:onClick #(j/main)}
                                             "A Magical Theme")))
               (dom/hr nil)
               (apply dom/div #js {:className "trackBar"}
                      (dom/p nil "Individual MP3 tracks:")
                      (om/build-all juke-button (:tracks app)))))))


;;*****************************************************************************
;; Main
;;*****************************************************************************
(defn ^:export main
  "Main entry point for page epsilon"
  []
  (let [msg "(main):: page_epsilon (main) function..."]
    (.log js/console msg)
    (om/root main-widget app-state {:target ALPHA-ROOT})))
