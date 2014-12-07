(ns clui-om.page-alpha
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [clui-om.widgets.tiles :as t]
            [clui-om.widgets.palettes :as p]
            [om.core :as om :include-macros true]
            [om.dom :as odom :include-macros true]))

;; helpers
(defn get-tiles [palette]
  (let [colors (vals palette)]  
    (vec (take 360 (repeatedly #(hash-map :settings t/DEFAULTS
                                          :color (nth colors (rand-int (count colors)))))))))

(def app-state (atom {:most-recent-activity (str  "Using palette " p/DEFAULT-PALETTE)
                      :tiles (get-tiles p/DEFAULT-PALETTE)
                      :palette p/DEFAULT-PALETTE
                      :poll-interval 500}))

(def ALPHA-ROOT (.getElementById js/document "alpha-div"))
(def BETA-ROOT (.getElementById js/document "beta-div"))

(defn report [e cursor]
   (.log js/console (:most-recent-activity @cursor)))

;; This is used as the callback function from the palette component defined
;; inside clui-om.widgets.palettes. Note that inside the top-level-widget
;; component function (below), we don't send this function all by itself:
;; it's wrapped in an anonymous function that gives access to the cursor
;; as arg #2. Thus (color-choice) is given access to the cursor, but the
;; Palette component itself remains blissfully ignorant of it! 
(defn color-choice [palette cursor]
  (let [msg (str "User chose palette: " palette)] 
       (om/update! cursor [:palette] palette)
       (om/update! cursor [:most-recent-activity] msg)
       (om/update! cursor [:tiles] (get-tiles palette))))

(defn shuffle-colors [cursor]
  (om/update! cursor [:tiles] (get-tiles (:palette @cursor))))

(defn top-level-widget [app owner opts]
  (let [echo #(report % app)] 
    (reify
      om/IWillMount
      (will-mount [_]
        (let [poll-interval (@app-state :poll-interval)] 
          (go (while true
                ;(.log js/console "Inside IWillMount infinite loop (" poll-interval ")")
                (shuffle-colors app)
                (<! (timeout poll-interval))))))
      om/IRender
      (render [_]
        (odom/div #js {:className "outerbox"}
                  (odom/p #js {:className "alert alert-info"} (:most-recent-activity app))
                  (om/build p/palette-chooser app {:opts {:callback #(color-choice % app)}})
                  (apply odom/div nil
                         (om/build-all t/color-tile (:tiles app))))))))

(defn ^:export main
  "Initialize the bootstrap demo page"
  []
  (let [msg "main():: initializing page-alpha.cljs"]
    (.log js/console msg)
    (om/root top-level-widget app-state {:target ALPHA-ROOT})))
