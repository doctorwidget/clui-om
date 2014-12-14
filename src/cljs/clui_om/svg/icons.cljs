(ns clui-om.svg.icons
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])          
  (:require [cljs.core.async :refer [put! <! >! chan]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [clui-om.svg.utils :as svg]))

;; Open source github project: ``Savage``

;; Savage provides functions to facilitate the use of SVG icons in an Om
;; context. It is, of course, trivial to simply use an ``<img>`` tag and provide
;; a ``src`` attribute pointing to an SVG file, but when you do that you end up
;; with an opaque blob on the page: you can change the overall size but you do
;; not have any access to the individual elements within the original SVG. One
;; of the most powerful features of SVG data is that it is composed of XHTML
;; sub-elements which can interact individually with CSS and
;; Java(Clojure)script. When you load the file via ``<img src=...`` you give up
;; that power. 

;; Therefore, the goal of Savage is to ease the creation of Om components which
;; are made up of actual <SVG> elements on the page, comprised of individual
;; subcomponents, each of which is in turn, an actual element generated via Om.
;; When you load the SVG this way, you can target individual SVG elements with
;; CSS or event handlers, giving you much finer control over the presentation
;; and behavior of the icon. That means you can keep one SVG source file around
;; and re-use it in different ways in different contexts. 

;; The core function is (svg-icon), which creates a standard Om component based
;; on SVG data. The third ``opts`` argument is essential for this component to
;; do its thing. The opts map is where you specify which SVG file to use, the
;; size of the icon, any event handlers to attach to the icon, and so on and so
;; forth. 

;; You must provide either a :uri or a :raw key inside the :opts
;; map. If the :uri key is found, Savage will try to load an SVG file from that
;; location. If there is no :uri key, but there is a :raw key, Savage will try
;; to parse the contents of the :raw key as if it were SVG text. If neither is
;; provided, the final icon will simply display an error message to that effect.
;; If there is a network or parsing error, Savage will again display an error
;; message in the body of the icon. <URI EXAMPLE> <RAW EXAMPLE>

;; An :attrs key can contain a sub-map which in turn contains valid SVG
;; attributes which will be attached to the outer SVG for the icon. Any
;; key-value pairs in this map will appear as attributes in the final SVG.
;; These values will override the identical attributes found in the source SVG. 
;; Useful possibilities would be :id, :class, :width, and :height. When those
;; attributes are not found in either the source file or your :attrs map, they
;; are simply omitted; Savage will not provide any defaults for them. <EXAMPLE>

;; One of the things you are most likely to want to include in your :attrs map
;; is a value for :id or :class. That lets you can use CSS child selectors
;; to target different sub-elements of the SVG, so that you can style different
;; portions of the icon differently. This is one of the main reasons you might
;; want to use an SVG icon in the first place! <EXAMPLE>.

;; Your :attrs map can also provide event handlers, which will also be attached
;; to the outermost SVG. Any of the standard React/Om handlers can be provided.
;; Just add the appropriate keyword as a key and your function of choice as the
;; value. These event handlers will all be attached to the overall SVG element,
;; not to individual sub-components. <EXAMPLE>

;;;;; VIEWBOXES
;; SVG files do not automatically scale to fill their HTML element, unlike (for
;; example) images do. The :viewbox attribute is used to manually specify how
;; the inner SVG elements scale within the outer SVG element. Think of the
;; :width and :height of the SVG element as the dimensions of the SVG "canvas"
;; as seen by the viewer of the page, who is outside the SVG looking in. In
;; contrast, the :viewbox :width and :height define how the elements *inside*
;; the SVG perceive the dimensions of the canvas from their perspective inside
;; it. Thus, when you define the :height and :width of the <SVG> element you
;; define how big that element is on the page. When you define the viewbox, you
;; define how big the SVG image is inside the element.

;; You can also use the :x and :y components of the :viewbox to define where the
;; canvas starts. All four numbers in combination allow you to both scale and
;; clip the image all at once.

;; Depending on your export options, Illustrator and Inkscape will sometimes
;; omit the :viewbox, which makes it difficult to use the file as an icon, since
;; the odds are good that the original file is wildly too big or too small for
;; that purpose. Changing the size of the outer SVG only changes the amount of
;; space the SVG ``canvas`` takes up; the inner image will still be wildly too
;; big or too small if there is no viewbox. 

;; For this reason, the :viewbox attribute is the *only* attribute to get a
;; default value in the absense of explicit values in the file or the attrs map.
;; If a :viewbox cannot be found in either of those locations, but there *are*
;; :width and :height attributes, a default viewbox will be calculated based on
;; those :width and :height values.

;; SVG files are simple text, so you can inspect your SVG source files to see if
;; they have either a viewbox or a width and height. If they have neither, you
;; should provide your own :viewbox property inside your CLJS code, or edit the
;; SVG file so that it includes one. <EXAMPLE>


;;;; ADVANCED ICONS
;; All of these attributes are applied only to the outermost <SVG> element. If
;; you need more fine-grained control (e.g. different :class or :id attributes
;; on different sub-elements of the SVG, or different event handlers on
;; different sub-elements of the SVG, and so on), you will need to manually
;; create the icon. You can use the savage.utils namespace to load and parse
;; your SVG data into hickory format. This is a pure Clojure representation of
;; the underlying SVG data, so it is straightforward to extract the
;; data of interest via standard Clojure syntax. Once you have that data in
;; hand, the om.dom namespace already allows you to create all of the individual
;; SVG elements.

(defn svg-icon
  "Generate an Om component based on SVG source data.
   The ``opts`` argument is essential for this component to work. At a minimum,
   the opts map must contain one of two keys:

   :uri --  with a valid URI leading to an SVG file as its value
   :raw -- with valid SVG markup as its value.

   In addition, you can provide an :attrs key with a sub-map as its value. That
   sub-map can contain any attributes you desire, each of which will be attached
   as attributes to the final SVG element. All key-value pairs will be included,
   even if they are not valid SVG elements by the W3C standard. Values in your
   custom :attrs map will override values found in the original file, for things
   such as :id, :width, :height, and :viewbox.

   See the documentation for more details. "
  [app owner opts]
  nil)
