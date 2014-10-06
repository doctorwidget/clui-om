(ns clui-om.page-alpha
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [clui-om.widgets.tiles :as t]
            [om.core :as om :include-macros true]
            [om.dom :as odom :include-macros true]))

;;;; Global state and paths
(def app-state (atom {:most-recent-activity "Nothing yet -- but customized!"
                      :alpha-tile t/DEFAULTS
                      :beta-tile t/DEFAULTS
                      :gamma-tile t/DEFAULTS
                      :poll-interval 333}))

(def ALPHA-ROOT (.getElementById js/document "alpha-div"))
(def BETA-ROOT (.getElementById js/document "beta-div"))

(defn report [e cursor]
   (.log js/console (:most-recent-activity @cursor)))

(defn shuffle-colors [cursor]
  (let [old-palette (get-in @cursor [:alpha-tile :colors])
        alpha-palette (shuffle old-palette)
        beta-palette (shuffle old-palette)
        gamma-palette (shuffle old-palette)]
    (.log js/console "Inside shuffle-colors")
    (.log js/console "Old: " (clj->js old-palette))
    (.log js/console "New: " (clj->js alpha-palette))
    (om/update! cursor [:alpha-tile :colors] alpha-palette)
    (om/update! cursor [:beta-tile :colors] beta-palette)
    (om/update! cursor [:gamma-tile :colors] gamma-palette)))

(defn top-level-widget [app owner opts]
  (let [echo #(report % app)] 
    (reify
      om/IWillMount
      (will-mount [_]
        (let [poll-interval (@app-state :poll-interval)] 
          (go (while true
                (.log js/console "Inside IWillMount infinite loop (" poll-interval ")")
                (shuffle-colors app)
                (<! (timeout poll-interval))))))
      om/IRender
      (render [_]
        (odom/div #js {:className "outerbox"}
                  (odom/p #js {:className "alert alert-info"} (:most-recent-activity app))
                  (odom/p #js {:className "alert alert-success" :onClick echo} "Click me!")
                  (om/build t/color-tile (:alpha-tile app) opts)
                  (om/build t/color-tile (:beta-tile app) opts)
                  (om/build t/color-tile (:gamma-tile app) opts))))))

(defn ^:export main
  "Initialize the bootstrap demo page"
  []
  (let [msg "main():: initializing page-alpha.cljs"]
    (.log js/console msg)
    (.log js/console (clj->js t/DEFAULT-COLORS))
    (om/root top-level-widget app-state {:target ALPHA-ROOT})))
