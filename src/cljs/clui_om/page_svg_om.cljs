(ns clui-om.page-svg-om
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan sliding-buffer timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [clui-om.svg.icons :as icons]))

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
                    (om/build icons/brittle-gear-icon app)
                    (dom/hr nil)
                    (om/build icons/brittle-disc-icon app))))))

(defn ^:export main
  "Main entry point for page-svg-om"
  []
  (let [msg "(main):: page_svg_om (main) function..."]
    (.log js/console msg)
    (om/root main-widget app-state {:target ALPHA-ROOT})))

