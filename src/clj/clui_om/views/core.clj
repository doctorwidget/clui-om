(ns clui-om.views.core
  (:require [net.cgrand.enlive-html :as h]))

;; base template to be re-used by more than one view
(h/deftemplate base-page
  "public/html/base.html"
  [context]
  [:title] (h/content (:title context))
  [:h1] (h/content (:heading context))
  [:#page-contents] (h/content (:content context)))

;; helper function that yields one single stylesheet element
(defn stylesheet [href]
  (first (h/html [:link {:href href :rel "stylesheet" :type "text/css"}])))

;; helper function that gives one script element
(defn script [src]
  (first (h/html [:script {:src src :type "text/javascript"}])))

;; a base template that includes the boostrap stylesheets
;; Also, unlike the earlier templates, this one can add arbitrary numbers
;; of stylesheets and script tags, just by including them as part of the
;; initial context dictionary. 
(h/deftemplate bootstrap-page
  "public/html/bootstrap.html"
  [{:keys [extra-css extra-js] :as context}]
  [:title] (h/content (:title context))
  ;; next transform appends one link per href if extra-css is a vec of hrefs 
  ;; and it gracefully does nothing when extra-css is nil/empty
  [:head] (h/append (map stylesheet extra-css))
  ;; Similarly, this appends any number of scripts to the bottom of the page
  [:body] (h/append (map script extra-js))
  [:h1] (h/content (:heading context))
  [:#page-contents] (h/content (:content context)))

;; a base template that includes very little
(h/deftemplate spartan-page
  "public/html/spartan.html"
  [context]
  [:title] (h/content (:title context))
  [:#page-contents] (h/content (:content context)))

;; snippets should resolve to a blob of HTML, but not necessarily
;; a complete page! Even if you target a fragment document with
;; the intent of returning the whole fragment, you still have to
;; explicitly specify a top element; that's the second-to-last
;; argument. Finally, you must always include an arguments vector
;; even if it's blank; that's the final argument.

(h/defsnippet home-body "public/html/home.tpl.html" [:div.spam] [])
(h/defsnippet vanilla-body "public/html/vanilla.tpl.html" [:div.spam] [])
(h/defsnippet react-body "public/html/react.tpl.html" [:div.spam] [])
(h/defsnippet react-tut-om-body "public/html/react-om-tut.tpl.html" [:div.spam] [])
(h/defsnippet kioo-om-tut-body "public/html/kioo-om-tut.tpl.html" [:div.spam] [])
(h/defsnippet bootstrap-demo-body "public/html/bootstrap-demo.tpl.html" [:div.spam] [])
(h/defsnippet page-alpha-body "public/html/page-alpha.tpl.html" [:div.spam] [])
(h/defsnippet page-beta-body "public/html/page-beta.tpl.html" [:div.spam] [])
(h/defsnippet page-gamma-body "public/html/page-gamma.tpl.html" [:div.spam] [])
(h/defsnippet draggable-page-body "public/html/draggable.tpl.html" [:div.main] [])
(h/defsnippet page-delta-body "public/html/page-delta.tpl.html" [:div.spam] [])
(h/defsnippet page-epsilon-body "public/html/page-epsilon.tpl.html" [:div.spam] [])

;; view functions should resolve to an entire document, not just
;; a fragment! Hence these views call the (base-page) function above,
;; which is based on (deftemplate).
(defn home-page []
  (base-page {:title "Clui-Om Home"
              :heading "Welcome to Clui-Om"
              :content (home-body)}))

(defn vanilla-page []
  (base-page {:title "Vanilla ClojureScript"
              :heading "Sanity Test For Raw ClojureScript"
              :content (vanilla-body)}))

(defn react-tut-page []
  (base-page {:title "Vanilla React"
              :heading "Sanity Tests for Raw React"
              :content (react-body)}))

(defn react-tut-om-page []
  (base-page {:title "React + Om = ???"
              :heading "The React Tutorial. Now With More Om."
              :content (react-tut-om-body)}))

(defn kioo-om-tut-page []
  (base-page {:title "Kioo"
              :heading "Enlive Style Templating For React"
              :content (kioo-om-tut-body)}))

(defn bootstrap-demo-page []
  (bootstrap-page {:title "Bootstrap"
              :heading "Bootstrap UI Components In Om"
                   :content (bootstrap-demo-body)}))

(defn page-alpha []
  (bootstrap-page {:title "Page Alpha"
                   :heading "Colored Tiles"
                   :content (page-alpha-body)}))

(defn page-beta []
  (bootstrap-page {:title "Page Beta"
                   :heading "Card Tricks"
                   :content (page-beta-body)}))

(defn page-gamma []
  (bootstrap-page {:title "Page Gamma"
                   :heading "Drag & Drop"
                   :content (page-gamma-body)}))

(defn draggable-page []
  (spartan-page {:title "om-draggable demo"
               :content (draggable-page-body)}))

;; note! (bootstrap-page) function now has the ability to load
;; arbitrary numbers of extra JS and/or CSS files to wherever we
;; want (i.e. the top or bottom of the head, or the top or bottom
;; of the body, etcetera). Just provide valid paths as a sequential
;; collection under the :extra-css and/or :extra-js keys.
(defn page-delta []
  (bootstrap-page {:title "Page Delta"
                   :heading "CSS Tricks"
                   :content (page-delta-body)
                   :extra-css ["css/clui_anims.css"
                               "css/animations.css"
                               #_"css/third_stuff.css"]
                   :extra-js [#_"js/my_fake_script.js"
                              #_"js/my_mock_script.js"]}))

(defn page-epsilon []
  (bootstrap-page {:title "Page Epsilon"
                   :heading "WebAudio API Demonstration"
                   :content (page-epsilon-body)
                   :extra-css []
                   :extra-js []}))


