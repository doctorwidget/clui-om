(ns clui-om.page-beta
  (:require-macros [cljs.core.async.macros :refer [go alt!]])  
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [clojure.browser.repl :as repl]
            [clui-om.misc.cards :as c]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

;; Also, one of the things I'm experimenting with on this page is the use of
;; core.async channels for all event handling. Rather than passing an event
;; handler function downstream to lower components, a higher component instead
;; passes an already-instantiated channel. The lower-level component can then
;; push event data (possibly a map with :event and :data keys) onto that
;; channel, while the higher level component sets up a perpetual (go-loop) to
;; pull events off of it. 

;; The application state cannot include lazy sequences, which is what (shuffle)
;; returns by default... so we force it to be realized via (apply list...).
(def shuffled-deck (apply list (shuffle (c/fresh-deck))))

(def app-state (atom {:most-recent-activity "Nothing yet..."
                      :deck shuffled-deck} ))

(def ALPHA-ROOT (.getElementById js/document "alpha-div"))
(def BETA-ROOT (.getElementById js/document "beta-div"))

(defn main-widget [app owner opts]
  (reify
    om/IInitState
    (init-state [_]
      {:draw (chan)
       :shuffle (chan)})
    om/IWillMount
    (will-mount [_]
      (let [draw (om/get-state owner :draw)
            shuffle (om/get-state owner :shuffle)]
        (go (loop []
              (let [request (<! draw)]
                (.log js/console (str "(main-widget):: Draw request: " request))
                (recur))))
        (go (loop []
              (let [request (<! shuffle)]
                (.log js/console (str "(main-widget):: Shuffle request: " request))
                (recur))))))
    om/IRenderState
    (render-state [_ {:keys [draw shuffle]}]
      (let [top-card (first (:deck app))] 
        (dom/div #js {:className "mainControls"}
                 (om/build c/deck-display app
                           {:init-state {:draw draw :shuffle shuffle}})
                 (dom/hr nil)
                 (dom/div #js {:className "topCard"}
                          (dom/span nil "Sneak Peek At Top Card: ")
                          ;; NOTE: cursor argument is a plain old map.
                          ;; No need to manually wrap it up as an atom.
                          ;; Nor any need to try to extract it from the app-state.
                          ;; Simple read-only cases like this can just take maps!
                          (om/build c/card-display-txt {:card top-card})))))))                  
                      
(defn ^:export main
  "Initialize page beta"
  []
  (let [msg "main():: initializing page-beta.cljs"]
    ;(repl/connect "http://localhost:9000/repl")
    (.log js/console msg)
    (om/root main-widget app-state {:target ALPHA-ROOT})))
