(ns clui-om.svg.icons
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])          
  (:require [cljs.core.async :refer [put! <! >! chan]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [clui-om.svg.utils :as svg]))

;; Om components that use SVG graphics

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
      {:svg-data nil :load-chan (svg/get-svg "images/gears3.svg")})
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
                                 #_:preserveAspectRatio #_preserve
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


(defn brittle-disc-icon
  "Another hard-coded component, this time with the intent of showing
   CSS-based animations."
  [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:svg-data nil :load-chan (svg/get-svg "images/circular115.svg")})
    om/IWillMount
    (will-mount [_]
      (let [load-chan (om/get-state owner :load-chan)]
        (go (let [svg (<! load-chan)]
              (om/set-state! owner :svg-data svg)))))
    om/IRenderState
    (render-state [_ {:keys [svg-data] :as state}]
      (let [w (get svg-data :width)
            _ (.log js/console (str "Using w: " w))
            h (get svg-data :height)
            _ (.log js/console (str "Using h: " h))
            g (first (get svg-data :elements))
            subs (filter map? (:content g))
            c (first (filter #(= :circle (:tag %)) subs))
            p (first (filter #(= :path (:tag %)) subs))
            pad 10
            gaph 6  ; larger h gap because image is taller than it is wide
            gapv 5
            padw (+ (js/parseFloat w) pad)
            _ (.log js/console (str "Using padw " padw))
            padh (+ (js/parseFloat h) pad)
            _ (.log js/console (str "Using padh " padh))]
        (dom/div #js {:className "iconOuter"}
                 (if svg-data 
                   (dom/svg #js {:className "iconDisc"
                                 :viewBox (str "0 0 " padw " " padh)
                                 :xmlns "http://www.w3.org/2000/svg"}
                            (dom/circle ; background element added in
                             (clj->js {:cx (/ padw 2)
                                       :cy (/ padh 2)
                                       :r (/ (min padw padh) 2)
                                       :className "discBg"}))
                            (dom/g (clj->js {:transform (str "translate(" gaph " " gapv ")")})
                                   (dom/path (clj->js {:d (get-in p [:attrs :d])}))
                                   (dom/circle (clj->js {:cx (get-in c [:attrs :cx])
                                                         :cy (get-in c [:attrs :cy])
                                                         :r (get-in c [:attrs :r])
                                                         :className "discInner"}))))
                   (dom/p nil "No SVG data available for circular115.svg")))))))
