(ns clui-om.svg.utils
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [clojure.string :as str]
            [cljs.core.async :refer [put! <! >! chan]]
            [cljs-http.client :as http]
            [hickory.core :as h]
            [hickory.select :as s]
            [hickory.render :refer [hickory-to-html]]))

;; Utilities for working with SVG in Om. The main task we're interested in is
;; loading and parsing external SVG resources.  An alternative to writing our
;; own code would be to use either ``snap.svg`` or ``svg.js``. However, that
;; would mean you would have to manage the state of your SVG assets separately
;; and in parallel to the main Om app-state and component-state, which seems
;; like a very poor idea. Instead, we load the SVG files via ``cljs-http`` and
;; parse them via ``hickory``, which allows us to provide a Clojure-friendly map
;; of the relevant pieces of the SVG for use by other code. This allows you to,
;; for example, explicitly create SVG elements inside your Om components.

(defn load-svg
  "Load an SVG via a remote call. Returns a core.async channel that will
   eventually hold the response. There's nothing SVG-specific about this
   process; it's just a convenient wrapper for using cljs-http."
  [uri]
  (let [out (chan)]
    (go (let [{:keys [status body headers]} (<! (http/get uri))]
          (put! out body)))
    out))

(defn parse-body
  "Attempts to parse a blob of text into an SVG data structure.
  The key attributes of the main SVG element are available as
  top-level keys, such as :width, :height, :view-box, etcetera.
  Adobe Illustrator and Inkscape often include spurious 'px' chars
  in those values, and we strip them out via #'[^0-9.]'

  The :inner-html key holds the contents of the original SVG as a single
  string, suitable for use as an argument to React's dangerouslySetInnerHTML,
  for those who like to live on the edge. 

  Alternatively, if you prefer to handle each child element separately,
  the :elements key contains a vector of maps, one map per sub-element
  in the original SVG. All of these maps will contain [:tag :foo], where
  :foo is the keywordized name of the SVG element; for example, :ellipse for the
  <ellipse> element, and :rect for the <rect> element. Any nested sub-elements
  are included under the :content key, which defaults to nil. All of the
  element-specific attributes of interest (e.g. :cx and :cy for :ellipse
  elements, or :d and :pathLength for :path elements) can be found in the
  :attrs sub-map, under their own keywordized names.
  "
  [blob]
  (let [parsed (h/parse blob)
        h-data (h/as-hickory parsed)
        root (first (s/select (s/tag :svg) h-data))
        attrs (:attrs root)
        elements (filter map? (:content root))
        inner-html (apply str (mapv hickory-to-html elements))
        non-digits #"[^0-9.]"]
    {:width (str/replace (:width attrs) non-digits "")
     :height (str/replace (:height attrs) non-digits "")
     :x (:x attrs)
     :y (:y attrs)
     ; note that hickory gives us all-small, no-dashes attributes
     ; whenever the original XHTML was camelCased
     :preserve-aspect-ratio (:preserveaspectratio attrs) 
     :view-box (:viewbox attrs)
     :elements elements
     :inner-html inner-html
     }))

(defn get-svg
  "Takes a URI for a target SVG resource and tries to load it.
   Returns a core.async channel that will eventually pop out a map
   of the deconstructed SVG file. Any SVG elements beyond the first
   one in the file are ignored. 

   The following attributes from the original SVG element will be
   available in the map via the corresponding clojure keywords:

   :x
   :y
   :width 
   :height
   :preserve-aspect-ratio 
   :view-box

    In addition, the map will hold the following additional attributes:

   :uri -- holds the URI of the original file
   :inner-html -- holds the complete contents of the SVG element as text.
               Useful for use with  ``dangerouslySetInnerHtml``.
   :elements -- holds a vector of maps, one for each sub-element of the
                main SVG. The data is in hickory format, which is a very
                straightforward conversion of XML data into nested
                Clojure maps. See the (parse-svg) function for more details."
  [uri]
  (let [out (chan)]
    (go (let [blob (<! (load-svg uri))
              parsed (parse-body blob)
              result (assoc parsed :uri uri)]
          (put! out result)))
    out))



