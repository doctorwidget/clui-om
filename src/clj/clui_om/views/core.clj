(ns clui-om.views.core
  (:require [net.cgrand.enlive-html :as h]))

;; base template to be re-used by more than one view
(h/deftemplate base-page
  "public/html/base.html"
  [context]
  [:title] (h/content (:title context))
  [:h1] (h/content (:heading context))
  [:#page-contents] (h/content (:content context)))

;; a base template that includes the boostrap stylesheets
(h/deftemplate bootstrap-page
  "public/html/bootstrap.html"
  [context]
  [:title] (h/content (:title context))
  [:h1] (h/content (:heading context))
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
                   :heading "All Custom, All The Time"
                   :content (page-alpha-body)}))


