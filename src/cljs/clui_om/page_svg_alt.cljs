(ns clui-om.page-svg-alt
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan sliding-buffer timeout]]))

(def paper (js/Snap "#bigOlCanvas"))
(def state (atom {}))
(def loaded (chan))

(defn get-async-frag
  "Load SVG data asynchronously, given a URI to that data. 
   Returns a core.async channel from which the frag will appear someday."
  [uri]
  (let [result-chan (chan)
        handler (fn [frag] (put! result-chan frag))]
   (.load js/Snap uri handler)
   result-chan))

(defn get-heart
  "Load the heart.svg graphic"
  []
  (.log js/console "Loading the heart SVG")
  (go
   (let [frag (<! (get-async-frag "images/heart.svg"))
         heart (.select frag "#heart-icon")
         nested (.svg paper 0 0 100 100 0 0 32 32)]
     (.append nested heart)
     (.attr heart #js {:class "original"})
     (.log js/console "Heart loaded and added to main SVG")
     (swap! state assoc :original heart)
     (put! loaded heart))))

(defn commence-cloning
  "Make a bunch of copies of the heart SVG"
  []
  (go 
   (let [heart (<! loaded)
         bluish (doto (.clone heart)
                  (.attr #js {:class "bluish"}))
         bluesvg (.svg paper 100 0 66 66 0 0 32 32)
         greeny (doto (.clone heart)
                  (.attr #js {:class "greeny"}))
         greensvg (.svg paper 200 0 32 32 0 0 32 32)
         blurf (.filter paper (.blur (.-filter js/Snap) 2 2))
         blurred (doto (.clone heart)
                   (.attr (clj->js {:class "blurred" :filter blurf})))
         blursvg (.svg paper 0 110 80 80 0 0 35 35)]
     (.append bluesvg bluish)
     (.append greensvg greeny)
     (.append blursvg blurred))))

(defn ^:export main
  "Main entry point for page svg (alt)"
  []
  (let [msg "(main):: page_svg_alt (main) function..."]
    (.log js/console msg)
    (get-heart)
    (commence-cloning)))

