(ns clui-om.react-om-tut
  (:require [clui-om.utils :as u]
            [om.core :as om :include-macros true]
            [om.dom :as odom :include-macros true]
            [markdown.core :as md]))

;; default starting comments
(def INITIAL [{:author "J. R. 'Bob' Dobbs" :text "Welcome to react-tut-om"}
              {:author "Hunter S. Thompson" :text "Cowabunga"}])

(def APP-ROOT (.getElementById js/document "app-main-div"))

(def app-state
  (atom {:comments INITIAL}))

;; component #1: a single comment item
;; plain old function that returns an om component
;; This is not imperative! Nothing is created by this definition.
;; Called with three arguments: a map (decomposed as shown), plus
;; a reference to the owner (not used in this case), and finally, a
;; reference to an options object (also not used in this case).
;; That first map is key: it is THE STATE for this component!
(defn comment
  [{:keys [author text] :as cursor} owner opts]
  (.log js/console (str "comment cursor = " cursor))
  (om/component
    (let [raw-markup (md/mdToHtml (or text "blank comment!"))
          color "red"]
      (odom/div #js {:className "comment"}
               (odom/h2 #js {:className "commentAuthor"} author)
               (odom/span #js {:dangerouslySetInnerHTML #js {:__html raw-markup}} )))))

;; component #2: a list of comments
;; Again a plain old function. Again called with three arguments
;; by convention: a map with properties, an owner reference, and
;; and an options object. Again, the map IS the state.
(defn comment-list
  [{:keys [comments] :as cursor} owner opts]
  (.log js/console (str "comment-list cursor = " (into {} cursor)))
  (om/component
   (odom/div #js {:className "commentList"}
            (into-array
             (om/build-all comment comments
                           {:key :id
                            :fn identity
                            :opts opts})))))

;; component #4; the area where the user can enter a new comment
(defn comment-form
  [cursor owner {:keys [stuff] :as opts}]
  (om/component
   (odom/div #js {:className "commentForm"}
             (odom/h3 "foo"))))

;; component #3; the complete box, containing the list of comments
;; plus an area for the user to enter and submit new ones. Again we
;; see an initial state map (this time explicitly named ``cursor``,
;; which is the Om term for a porthole into the main state atom),
;; plus an owner reference.
(defn comment-box 
  [cursor owner {:keys [poll-interval] :as opts}]
  (reify
    #_om/IInitState
    #_(init-state [this]
      (om/update! cursor #(assoc % :comments INITIAL)))    
    om/IRender
    (render [this]
      (odom/div
       #js {:className "commentBox"}
       (odom/h1 nil "Comments")
       (om/build comment-list cursor)
       #_(om/build comment-form cursor {:opts opts})))))  

;; component #4: the overall app. Again note the state map renamed
;; "cursor" because this is Om, and the owner as the second argument.
(defn tutorial-app [cursor owner]
  (reify
    om/IRender
    (render [this]
      (odom/div nil
               (om/build comment-box cursor
                         {:opts {:poll-interval 2000
                                 :url "/comments"}})))))

(defn ^:export initialize
  "Initialize the main vanilla page"
  []
  (let [uid (u/guid)
        basemsg "initializing react-om-tut javascript with guid:  <"
        msg (apply str basemsg uid ">")]
    (.log js/console msg)
    ;; Note that the original release of Om had the third argument as THE 
    ;; target. Later releases changed the third argument to a MAP of OPTIONS,
    ;; where ``:target`` is one possible option. Also (and even more
    ;; importantly), the initial release of Om required the state map as the
    ;; initial argument to root, followed by the component function. Now that
    ;; order is reversed (function first, state map second, opts map third)

    ;; simplest example: build a single comment node at the app root
    #_(om/root comment  {:author "beans" :text "ham"}  {:target APP-ROOT})

    ;; slightly more complex example: build full comment list from app state
    #_(om/root comment-list app-state {:target APP-ROOT})

    ;; even more complex: build a comment box, but no overall app
    #_(om/root comment-box app-state {:target APP-ROOT})
    
    ;; most complex example: uses an overall (tutorial-app) component
    (om/root tutorial-app app-state {:target APP-ROOT})))
