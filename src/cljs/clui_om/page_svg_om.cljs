(ns clui-om.page-svg-om
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [clojure.browser.repl :as repl]
            [cljs.core.async :refer [put! <! >! chan sliding-buffer timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [clui-om.svg.brittle-icons :as b]
            [clui-om.svg.icons :as icons :include-macros true]))

(def app-state (atom {}))

(def ALPHA-ROOT (.getElementById js/document "alphaRoot"))

(defn main-widget
  [app owner opts]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "mainWidgetOuter"}
           (dom/div #js {:className "mainWidgetInner"}
                    (dom/p nil "Page-SVG-Om Stuff Will Go Here.")
                    (om/build b/brittle-gear-icon app)
                    (om/build b/brittle-disc-icon app)
                    (om/build b/brittle-medal-icon app)
                    (om/build b/robust-heart-icon app)
                    (dom/div #js {:className "iconOuter bear"}
                             (om/build b/auto-bear-icon
                                       app
                                       {:opts {:attrs {:id "myBear"}}}))
                    (dom/div #js {:className "iconOuter ant"}
                             (om/build b/auto-ant-icon
                                       app
                                       {:opts {:attrs {:className "myAnt"}}}))
                    (dom/div #js {:className "iconOuter flipper"}
                             (om/build b/seahorse
                                       app
                                       {:opts {:attrs {:className "flipper"}}}))
                    (dom/div #js {:className "iconOuter kitty"}
                             (dom/svg #js {:viewBox "0 0 120 120"}
                                      (dom/circle #js {:cx 60 :cy 60 :r 60})
                                      (om/build b/kitty-icon
                                                app
                                                {:opts {:attrs {:y -5 :id "kitty"}}}))))))))

(defn ^:export main
  "Main entry point for page-svg-om"
  []
  (let [msg "(main):: page_svg_om (main) function..."]
    (repl/connect "http://localhost:9000/repl")
    (.log js/console msg)
    (.log js/console (str "Brittle-Icons Heart Constant: " b/heart-svg))
    (om/root main-widget app-state {:target ALPHA-ROOT})))

