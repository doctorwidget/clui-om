(ns clui-om.svg.icons
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])          
  (:require [cljs.core.async :refer [put! <! >! chan]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [clui-om.svg.utils :as svg]))

(def om-tags {:circle dom/circle
              :ellipse dom/ellipse
              :g dom/g
              :line dom/line
              :path dom/path
              :polyline dom/polyline
              :rect dom/rect
              :svg dom/svg
              :text dom/text
              :defs dom/defs
              :lineargradient dom/linearGradient
              :polygon dom/polygon
              :radialgradient dom/radialGradient
              :stop dom/stop
              :tspan dom/tspan})

(defn reify-children
  "Takes a single SVG element in map form (i.e. Hickory style). Returns
  that child and all of its children as Om DOM elements (not components!).
  Elements which do not match a known Om element are omitted.
  "
  [{:keys [tag attrs content] :as elt}]
  (let [dom-fn (tag om-tags)
        children (filterv map? content)]
    (if dom-fn
      (apply dom-fn (clj->js attrs)
             (map reify-children children)))))

(defn auto-icon
  "Takes SVG data in map form (i.e. Hickory style, or as returned from the
  ``defsvg`` macro in this library) and returns an Om component function which
  has been dynamically generated based on the SVG data. Any
  hard-coded :style, :width and :height values are removed by default, so that
  the resulting SVG can be styled via CSS. However, the :viewBox attribute is
  left untouched, so that the aspect ratio of the image is correct.

  When you instantiate the Om component at runtime, you can provide an :attrs
  key inside the :opts map in the third (optional) argument. All values in
  that :attrs map will be merged onto the pre-existing attributes map in the
  resulting SVG element. So if (for example) you really did want to use
  hard-coded height and width values for some reason, you can apply them there.
  You can also add standard Om/React event handlers within that :attrs map.
  Finally, you might want to add a :className or :id to the
  :attrs map, to make the resulting component easy to style with CSS.
  "
  [svg]
  (fn [cursor owner {:keys [attrs] :as opts}]
    (reify
      om/IRender
      (render [_]
        (let [children (:content svg)
              raw-attrs (-> (:attrs svg)
                            (dissoc :height)
                            (dissoc :width)
                            (dissoc :style))
              final-attrs (merge raw-attrs attrs)]
          (apply dom/svg (clj->js final-attrs)
                 (map reify-children children)))))))

