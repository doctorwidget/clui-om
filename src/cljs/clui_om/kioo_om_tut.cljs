(ns clui-om.kioo-om-tut
  (:require [kioo.om :refer [content set-attr do-> substitute listen]]
            [kioo.core :refer [handle-wrapper]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true])
  (:require-macros [kioo.om :refer [defsnippet deftemplate]]))

;; app state and other constants
(def src-doc "public/html/frags/kioo-om-frag.tpl.html")

(def app-state (atom {:heading "main"
                      :content    "Hello World"
                      :navigation [["home" #(js/alert %)]
                                   ["next" #(js/alert %)]]}))

(def APP-ROOT (.getElementById js/document "kioo-app-div"))

;; React Root #1: From the Kioo github page
;; Kioo snippets and templates all return full-fledged React components
;; React component #1: a single nav item
(defsnippet my-nav-item "public/html/frags/kioo-om-frag.tpl.html" [:.nav-item]
  [[caption func]]
  {[:a] (do-> (content caption)
              (listen :onClick #(func caption)))})

;; React component #2: the header area
(defsnippet my-header "public/html/frags/kioo-om-frag.tpl.html" [:header]
  [{:keys [heading navigation]}]
  {[:h1] (content heading)
   [:ul] (content (map my-nav-item navigation))})

;; react component #3: the whole page
(deftemplate my-page "public/html/frags/kioo-om-frag.tpl.html"
  [data]
  {[:header] (substitute (my-header data))
   [:.content] (content (:content data))})

;; react component #4 (defined with pure Om, not Kioo!)
(defn init [data] (om/component (my-page data)))


;; React Root #2: Homegrown by me
(def other-state (atom {:msg "Greetings, Terra!"
                        :spam "Spam spam spam"
                        :hovering false
                        :hover-on-class "gold vanilla-border"
                        :hover-off-class ""}))

(def OTHER-ROOT (.getElementById js/document "kioo-other-div"))

(defn hover-set [b]
  (swap! other-state assoc :hovering b)
  (.log js/console (str "Other-state hover status: " (:hovering @other-state))))

(defn hover-class []
  (let [class-picker (if (:hovering @other-state)
                       :hover-on-class
                       :hover-off-class)]
    (class-picker @other-state)))

(defsnippet my-greeter "public/html/frags/kioo-other-frag.tpl.html" [:#kioo-other-frag]
  [{:keys [msg]}]
  {[:.greeting] (do->
                 (content msg)
                 (listen :onClick #(js/alert msg)))
   [:#kioo-other-frag] (do-> (listen :onMouseOver #(hover-set true))
                             (listen :onMouseOut #(hover-set false))
                             (set-attr :className (hover-class)))
   })

(defn other-init [data] (om/component (my-greeter data)))

;; Finally, the public (main) function, for use on the HTML host page
(defn ^:export main
  "Initialize the kioo-om-tut page"
  []
  (.log js/console "Hello from kioo-om-tut!")
  (om/root init app-state {:target APP-ROOT})
  (om/root other-init other-state {:target OTHER-ROOT}))
