(ns clui-om.page-alpha
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [clui-om.widgets.tiles :as t]
            [clui-om.widgets.palettes :as p]
            [om.core :as om :include-macros true]
            [om.dom :as odom :include-macros true]))

;; helpers
(defn get-tiles []
   (vec (take 360 (repeatedly #(hash-map :settings t/DEFAULTS
                                       :index (rand-int (count t/DEFAULT-COLORS)))))))

;;;; Global state and paths
(def app-state (atom {:most-recent-activity "Nothing yet -- but customized!"
                      :tiles (get-tiles)
                      :poll-interval 500}))

(def ALPHA-ROOT (.getElementById js/document "alpha-div"))
(def BETA-ROOT (.getElementById js/document "beta-div"))

(defn report [e cursor]
   (.log js/console (:most-recent-activity @cursor)))

(defn color-choice [palette]
  (.log js/console (str "User chose palette: " palette)))

(defn shuffle-colors [cursor]
  (let [old-indices (map :index (get-in @cursor [:tiles]))]
    ;(.log js/console "Inside shuffle-colors")
    ;(.log js/console "Old indices: " (clj->js old-indices))
    (om/update! cursor [:tiles] (get-tiles))
    ;(.log js/console "New indices: " (clj->js (map :index (get-in @cursor
    ;[:tiles]))))
    ))

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
                  (om/build p/palette-chooser app {:opts {:callback color-choice}})
                  (apply odom/div nil
                         (om/build-all t/color-tile (:tiles app))))))))

(defn ^:export main
  "Initialize the bootstrap demo page"
  []
  (let [msg "main():: initializing page-alpha.cljs"]
    (.log js/console msg)
    (.log js/console (clj->js t/DEFAULT-COLORS))
    (om/root top-level-widget app-state {:target ALPHA-ROOT})))
