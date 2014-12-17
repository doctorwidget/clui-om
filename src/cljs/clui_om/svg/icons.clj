(ns clui-om.svg.icons
  (:require [clojure.java.io :as io]
            [clojure.string :as str]
            [hickory.core :as h]
            [hickory.select :as s]))

;; Macros for use with clui-om.svg. All macro code must be written in Clojure,
;; not ClojureScript!

(defn keep-nums
  "Strip a string of any non-digit characters. Useful because Illustrator and
   Inkscape like to include spurious 'px' suffixes on what should be purely
   numeric attributes.
   "
  [^String input]
  (let [non-digits #"[^0-9.]"]
    (if (nil? input)
      input 
      (str/replace input non-digits ""))))

(defn file->map
  "Converts an SVG file into a map. Takes a (string) path to the file,
   and returns a standard Clojure map built from the first SVG element found in
   the file. Any additional SVG elements after the first one are discarded.
   Additional information (such as the DOCTYPE or the name of the program that
   created the file) is omitted. If there is no viewBox attribute, but width and
   height attributes are available, a viewbox attribute will be generated in the
   pattern ``0 0 width height``. All whitespace is removed from the contents of
   the SVG; only child elements are returned.
   "
  [^String path]
  (let [parsed (-> path
                   io/resource
                   slurp
                   h/parse
                   h/as-hickory)
        root (first (s/select (s/tag :svg) parsed))
        x (keep-nums (get-in root [:attrs :x]))
        y (keep-nums (get-in root [:attrs :y]))
        w (keep-nums (get-in root [:attrs :width]))
        h (keep-nums (get-in root [:attrs :height]))
        vb (get-in root [:attrs :viewbox])
        final-vb (if (and (nil? vb) h w)
                   (str "0 0 " w " " h)
                   vb)
        elements (filterv map? (:content root))]
     (-> root
         (assoc :content elements)
         (assoc-in [:attrs :x] x)
         (assoc-in [:attrs :y] y)
         (assoc-in [:attrs :width] w)
         (assoc-in [:attrs :height] h)
         (assoc-in [:attrs :viewBox] final-vb))))

(defmacro defsvg
  "Converts an SVG file into a map and binds the result to a var. At runtime,
   the provided name will be bound to a plain Clojure map, so that the
   programmer does not need to concern him or herself with any IO details.
  "
  [name path]
  (let [result# (file->map path)]
    `(def ~name ~result#)))

