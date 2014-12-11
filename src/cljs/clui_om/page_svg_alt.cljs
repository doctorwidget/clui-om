(ns clui-om.page-svg-alt
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [clojure.string :as str]
            [cljs.core.async :refer [put! <! >! chan sliding-buffer timeout]]
            [cljs-http.client :as http]
            [hickory.core :as hickory]
            [hickory.select :as s]
            [hickory.render :refer [hickory-to-html]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

;;; NOTE that we had to add the hickory project as a dependency in order
;;; to get SVG markup injected into the page. You could do that kind of thing
;;; with ``snap.svg``, but then you'd be managing SVG state *separately* from
;;; Om, and that just seems like a bad idea. This way we load the SVG using the
;;; cljs-http library, parse it and query it using Hickory and then create the
;;; necessary elements directly inside Om. Now your SVG state is integrated
;;; with the rest of the Om state, which is surely the best path. 

(declare paper)
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

(defn get-icon-paper
  "Get an SVG canvas (aka paper) with the specified dimensions"
  [real-width real-height virt-width virt-height]
  (.svg paper 0 0 real-width real-height 0 0 virt-width virt-height))

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
         blursvg (.svg paper 0 110 80 80 0 0 35 35)
         golden (doto (.clone heart)
                  (.attr #js {:class "golden"}))
         goldsvg (.svg paper 250 50 100 100 0 0 35 35)
         _ (.attr goldsvg #js {:class "goldsvg"})]
     (.append bluesvg bluish)
     (.append greensvg greeny)
     (.append blursvg blurred)
     (.append goldsvg golden))))

; try also heart.svg, drawing.svg, domestic.svg, gears3.svg
(defn load-svg
  "Demonstration of using the hickory library to parse out the relevant
  pieces from an external SVG file. From there, the strategy would be to
  (1) Create a brand new om.dom/svg element
  (2) Supply the `viewbox` attribute with 0 0 width height
  (3) (Supply an explicit width and height if desired)
  (4) Supply a marker class, sensitive to the current app state
  (5) !! use __dangerouslySetInnerHTML to set the inner HTML
  (6) Use the outer marker class + knowledge of the inner SVG, to
      create whatever context-specific changes are needed."
  []
  (let [result (chan)] 
    (go (let [{:keys [status body headers] :as all} (<! (http/get "images/gears3.svg"))
              parsed (hickory/parse body)
              h-data (hickory/as-hickory parsed)
              svg-root (first (s/select (s/tag :svg) h-data))
              svg-width (get-in svg-root [:attrs :width] :wtf)
              svg-height (get-in svg-root [:attrs :height] :wtf)
              innerhtml (get svg-root :content :wtf)
              hydrated (mapv hickory-to-html (filter map? innerhtml))
              finalized (apply str hydrated)]
          #_(.log js/console "Requested images/heart.svg")
          #_(.log js/console (str "Received status: " status))
          #_(.log js/console (str "Received body: " body))
          #_(.log js/console (str "Parsed body as: " h-data))
          #_(.log js/console (str "Found SVG Root: " svg-root))
          #_(.log js/console (str "Found SVG Width: " svg-width))
          #_(.log js/console (str "Found SVG Height: " svg-height))
          #_(.log js/console (str "InnerHTML: " innerhtml))
          #_(.log js/console (str "Rehydrated HTML: " hydrated))
          #_(.log js/console (str "Final inner HTML: " finalized))
          (put! result {:width svg-width :height svg-height :inner-html finalized})))
    result))

(defn inject-svg
  "Inject SVG markup onto the page based on a remote call."
  []
  (go (let [svg (<! (load-svg))]
        (.log js/console (str "Injecting:: width: " (:width svg)))
        (.log js/console (str "Injecting:: height: " (:height svg)))
        (.log js/console (str "Injecting:: HTML: " (:inner-html svg))))))


;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Om Section Begins
;;;;;;;;;;;;;;;;;;;;;;;;;;

(def app-state (atom {}))

(def ALPHA-ROOT (.getElementById js/document "alphaRoot"))

(defn main-widget
  [app owner opts]
  (reify
    om/IInitState
    (init-state [_]
      {:svg-data nil
       :load-chan (load-svg)
       :hovering false})
    om/IWillMount
    (will-mount [_]
      (let [arrivals (om/get-state owner :load-chan)]
        (go (let [svg (<! (load-svg))]
              (om/set-state! owner :svg-data svg)))))
    om/IRenderState
    (render-state [_ {:keys [svg-data] :as state}]
      (let [w (str/replace (get svg-data :width "0") #"px" "")
            h (str/replace (get svg-data :height "0") #"px" "")
            raw (get svg-data :inner-html "wtf")]
        (dom/div #js {:className "mainWidget"}
                 (dom/div #js {:className "mainInner"}
                          (dom/p nil "Om Component Begins here:")
                          (dom/p nil (str "Width: " w))
                          (dom/p nil (str "Height: " h))
                          (dom/svg (clj->js {:className "foobar"
                                             :viewBox (str "0 0 " w " " h)
                                             ;:width "111"
                                             ;:height "111"
                                             :xmlns "http://www.w3.org/2000/svg"
                                             :dangerouslySetInnerHTML #js {:__html raw}
                                             :onMouseOver #(om/set-state! owner :hovering true)
                                             :onMouseOut #(om/set-state! owner :hovering false)
                                             }))))))))


(defn ^:export main
  "Main entry point for page svg (alt)"
  []
  (let [msg "(main):: page_svg_alt (main) function..."]
    (def paper (js/Snap "#bigOlCanvas"))
    (.log js/console msg)
    (get-heart)
    (commence-cloning)
    (inject-svg)
    (om/root main-widget app-state {:target ALPHA-ROOT})))

