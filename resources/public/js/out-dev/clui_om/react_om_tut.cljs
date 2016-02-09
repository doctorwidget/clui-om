(ns clui-om.react-om-tut
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [cljs-http.client :as http]
            [clui-om.utils :as u]
            [om.core :as om :include-macros true]
            [om.dom :as odom :include-macros true]
            [markdown.core :as md]))

;;;; App State and other essentials
(def app-state
  (atom {:comments []}))

(def APP-ROOT (.getElementById js/document "app-main-div"))

;;;; Connectivity
;; Functions that handle all of the IO from the client to the server.

(defn- fetch-comments
  "Get the current set of comments from the server.
   Demonstrates how to tease apart a standard Ring HTTP response. "
    [cursor {:keys [url]}]
    (go (let [{:keys [status body headers] :as all} (<! (http/get url))
              msg (:message body)
              cts (:comments body)
              numbered-comments (mapv u/with-id cts)]
          ;; OPTIONAL: this if block is very optional logging
          (if (= (count (@app-state :comments)) (count numbered-comments))
            (.log js/console (str "No change in comments."))
            (do
              (.log js/console (str "Message: " msg))
              (.log js/console (str "Status: " status))
              (.log js/console (str "Body: " body))
              (.log js/console (str "Headers: " headers))
              (.log js/console (str "Comments: " numbered-comments))))
          ;; REQUIRED:  the actual update to the application state
          (om/transact! cursor #(assoc % :comments numbered-comments)))))

(defn save-comment!
  "Submit a new comment from the client to the server."
  [comment cursor {:keys [url]}]
  (do (om/transact! cursor :comments  
                    (fn [original-comments]
                      (.log js/console (str "Original comments: " original-comments))
                      (.log js/console (str "New comment: " comment))
                      (conj original-comments comment)))
      ;; NOTE correct args to om/transact! are: cursor KORKS function
      ;; KORKS (aka key-or-keys) lets you drill down into the cursor to get a
      ;; sub-cursor. If you manually drill down you end up with a plain data
      ;; structure, not an Om cursor, which means it's immutable, even though
      ;; you are inside om/transact! USE THE KORKS LUKE
      (go (let [res (<! (http/post url {:json-params comment}))]
            (.log js/console (:message res))))
      (.log js/console (str "Optimistic comments: " (:comments @app-state)))))

(defn handle-submit
  "Event handler for user clicks on the comment form button."
  [e cursor owner opts]
  (let [[author author-node] (u/value-from-node owner "author")
       [text text-node]     (u/value-from-node owner "text")]
    (when (and author text)
      (save-comment! {:author author :text text} cursor opts)
      (u/clear-nodes! author-node text-node))
    false))

;;;; Om Components
;; This is why we're here!

;; component #1: a single comment item
;; plain old function that returns an om component
;; This is not imperative! Nothing is created by this definition.
;; Called with three arguments: a map (decomposed as shown), plus
;; a reference to the owner (not used in this case), and finally, a
;; reference to an options object (also not used in this case).
;; That first map is key: it is THE STATE for this component!
(defn comment
  [{:keys [author text] :as cursor} owner opts]
  (.log js/console (str "generating single comment from " author))
  (om/component
    (let [raw-markup (md/mdToHtml (or text "blank comment!"))
          color "red"]
      (odom/div #js {:className "comment"}
               (odom/h3 #js {:className "commentAuthor"} author)
               (odom/span #js {:dangerouslySetInnerHTML #js {:__html raw-markup}} )))))

;; component #2: a list of comments
;; Again a plain old function. Again called with three arguments
;; by convention: a map with properties, an owner reference, and
;; and an options object. Again, the map IS the state.
(defn comment-list
  [cursor owner opts]
  (let [cts (:comments cursor)]  
    (.log js/console (str "generating comments list from cursor: " cursor))
    (.log js/console (str "comments are: " cts))
    (om/component
     (odom/div #js {:className "commentList"}
               (into-array
                (om/build-all comment cts
                              {:key :id
                               :fn identity
                               :opts opts}))))))

;; component #3; the area where the user can enter a new comment
(defn comment-form
  [app owner opts]
  (reify
    om/IRender
    (render [this]
      (odom/form
       #js {:className "commentForm" :onSubmit #(handle-submit % app owner opts)}
       (odom/h3 nil "Add Comment")
       (odom/input #js {:type "text" :placeholder "Your Name" :ref "author"})
       (odom/input #js {:type "text" :placeholder "Say something..." :ref "text"})
       (odom/input #js {:type "submit" :value "Post"}))))) 

;; component #4; the complete box, containing the list of comments
;; plus an area for the user to enter and submit new ones. Again we
;; see an initial state map (this time explicitly named ``cursor``,
;; which is the Om term for a porthole into the main state atom),
;; plus an owner reference.
(defn comment-box 
  [cursor owner {:keys [poll-interval] :as opts}]
  (reify
    om/IWillMount
    (will-mount [this]
      (go (while true
            (fetch-comments cursor opts)
            (<! (timeout poll-interval)))))
    om/IRender
    (render [this]
      (odom/div
       #js {:className "commentBox"}
       (odom/h2 nil "Comments")
       (om/build comment-list cursor {:opts opts})
       (odom/hr nil)
       (om/build comment-form cursor {:opts opts})))))  

;; component #5: the overall app. Again note the state map renamed
;; "cursor" because this is Om, and the owner as the second argument.
(defn tutorial-app [cursor owner]
  (reify
    om/IRender
    (render [this]
      (odom/div nil
               (om/build comment-box cursor
                         {:opts {:poll-interval 10000
                                 :url "/react-om-tut/comments"}})))))

(defn ^:export main
  "Initialize the react-om-tut page"
  []
  (let [uid (u/guid)
        basemsg "main():: initializing react-om-tut.cljs with initial guid:  <"
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
