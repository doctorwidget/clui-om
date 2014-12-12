(ns clui-om.page-svg-om
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan sliding-buffer timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [clui-om.svg.utils :as svg]))

(def app-state (atom {}))

(def ALPHA-ROOT (.getElementById js/document "alphaRoot"))

(defn brittle-gear-icon
  "A hard-coded Om component, with each sub-element instantiated and placed
   manually. This is obviously NOT the best to handle this! Instead, there
   should be intelligent recursion through all of the children, instantiating
   each one in turn as a separate Om component based on its :tag. Also, even
   making one component per source SVG seems much too brittle; don't we want to
   be able to say ``Please make a button from any SVG``, and then get back a
   component that will reliably have all of the proper subcomponents? That's
   obviously the long-term goal. Until then, we'll leave this function lying
   around as a model for a more generic tools in the future.

  Note that we do not provide any styling aspects at all with any of the SVG
  elements. Anything hard-coded at the element level cannot be overridden
  via CSS. It's not just a matter of giving it higher priority with tricks
  like ``!important``: you simply cannot override element attributes with
  CSS, period. So it's better to leave *everything* unspecified in the markup
  and do it all in CSS: colors, stroke-widths, overall width and height, etc.
  "
  [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:svg-data nil
       :load-chan (svg/get-svg "images/gears3.svg")
       :hovering false
       :selected false})
    om/IWillMount
    (will-mount [_]
      (let [load-chan (om/get-state owner :load-chan)]
        (go (let [svg (<! load-chan)]
              (om/set-state! owner :svg-data svg)))))
    om/IRenderState
    (render-state [_ {:keys [svg-data] :as state}]
      (let [w (get svg-data :width)
            h (get svg-data :height)
            preserve (get svg-data :preserve-aspect-ratio)
            e (get svg-data :elements)
            g (first e)
            subs (filter map? (:content g))
            c1 (first subs)
            c2 (second subs)
            p (last subs)]
        (dom/div #js {:className "iconOuter"}
                 (if svg-data 
                   (dom/svg #js {:className "iconGears"
                                 :viewBox (str "0 0 " w " " h)
                                 :preserveAspectRatio preserve
                                 :xmlns "http://www.w3.org/2000/svg"}
                            (dom/rect
                             (clj->js {:width w
                                       :height h}))
                            (dom/circle
                             (clj->js {:cx (get-in c1 [:attrs :cx])
                                        :cy (get-in c1 [:attrs :cy])
                                        :r (get-in c1 [:attrs :r])}))
                            (dom/circle
                             (clj->js {:cx (get-in c2 [:attrs :cx])
                                        :cy (get-in c2 [:attrs :cy])
                                        :r (get-in c2 [:attrs :r])}))
                            (dom/path
                             (clj->js {:d (get-in p [:attrs :d])})))
                   (dom/p nil "No SVG data loaded yet")))))))

(defn main-widget
  [app owner opts]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "mainWidgetOuter"}
               (dom/div #js {:className "mainWidgetInner"}
                        (dom/p nil "Page-SVG-Om Stuff Will Go Here.")
                        (om/build brittle-gear-icon app))))))


(defn ^:export main
  "Main entry point for page-svg-om"
  []
  (let [msg "(main):: page_svg_om (main) function..."]
    (.log js/console msg)
    (om/root main-widget app-state {:target ALPHA-ROOT})))

