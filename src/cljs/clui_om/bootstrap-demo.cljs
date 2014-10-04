(ns clui-om.bootstrap-demo
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [om-bootstrap.button :as b]
            [om.core :as om :include-macros true]
            [om.dom :as odom :include-macros true]))

;;;; Global state and paths
(def app-state (atom {:most-recent-activity "Nothing yet"}))

(def APP-ROOT (.getElementById js/document "bs-app-div"))
(def ALT-ROOT (.getElementById js/document "bs-alt-div"))

(defn report-activity
  [e app]
  (let [target (.-target e)
        elt (.-nodeName target)
        text (.-textContent target)
        msg (str "User interacted with " elt " labeled " text)]
    (.log js/console msg)
    (om/transact! app #(assoc % :most-recent-activity msg))))

(defn top-level-widget [app owner opts]
  (let [echo #(report-activity % app)] 
    (reify
      om/IRender
      (render [_]
        (odom/div #js {:className "outerbox"}
                  (odom/p #js {:className "alert alert-info"} (:most-recent-activity app))
                  (odom/p #js {:classname "alert alert-success" :onClick echo} "Click me!")
                  (b/toolbar {}
                      (b/button {:on-click echo} "Default")
                      (b/button {:bs-style "primary" :on-click echo} "Primary")
                      (b/button {:bs-style "success" :on-click echo} "Success")
                      (b/button {:bs-style "info" :on-click echo} "Info")
                      (b/button {:bs-style "warning" :on-click echo} "Warning")
                      (b/button {:bs-style "danger" :on-click echo} "Danger")
                      (b/button {:bs-style "link" :on-click echo} "Link")))
        ))))



(defn ^:export main
  "Initialize the bootstrap demo page"
  []
  (let [msg "main():: initializing bootstrap-demo.cljs"]
    (.log js/console msg)
   
   (om/root top-level-widget app-state {:target APP-ROOT})))
