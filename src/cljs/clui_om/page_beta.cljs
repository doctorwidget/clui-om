(ns clui-om.page-beta
  (:require-macros [cljs.core.async.macros :refer [go alt!]])  
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [clojure.browser.repl :as repl]
            [clui-om.misc.cards :as c]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

;; Om application state should never include lazy sequences, but that's exactly
;; what (shuffle) returns by default... so we force it to be realized via (vec)
(def shuffled-deck
  (apply list (shuffle (c/fresh-deck))))

;; Om is VERY PICKY about starter sequences... trying to use an empty vector
;; resulted in a 100% total fail with very unhelpful debugger messages.
(def starter-hand
  (list))

(def app-state (atom {:deck shuffled-deck
                      :hand starter-hand}))

(def ALPHA-ROOT (.getElementById js/document "alpha-div"))
(def BETA-ROOT (.getElementById js/document "beta-div"))

(defn draw! [app]
  (let [hand (@app :hand)
        deck (@app :deck)]
    (om/transact! app :hand #(conj % (first deck)))
    (.log js/console (str "Hand is now: " (@app :hand)))
    (om/update! app :deck (rest deck))
    (.log js/console (str "Deck count: " (count (@app :deck))))))

(defn shuffle! [app]
  (om/update! app :hand (list))
  (om/update! app :deck (apply list (shuffle (c/fresh-deck)))))

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
                (draw! app)
                (recur))))
        (go (loop []
              (let [request (<! shuffle)]
                (.log js/console (str "(main-widget):: Shuffle request: " request))
                (shuffle! app)
                (recur))))))
    om/IRenderState
    (render-state [_ {:keys [draw shuffle]}]
      (let [top-card (first (:deck app))] 
        (dom/div #js {:className "mainControls"}
                 (om/build c/deck-display app
                           {:init-state {:draw draw :shuffle shuffle}})
                 (dom/hr nil)
                 (if top-card 
                   (dom/div #js {:className "topCard"}
                            (dom/span nil "Sneak Peek At Top Card: ")
                            ;; NOTE: cursor argument is a plain old map.
                            ;; No need to manually wrap it up as an atom.
                            ;; Nor any need to try to extract it from the app-state.
                            ;; Simple read-only cases like this can just take maps!
                            (om/build c/card-display-txt top-card)))
                 (dom/hr nil)
                 (om/build c/hand-display app))))))                  
                      
(defn ^:export main
  "Initialize page beta"
  []
  (let [msg "main():: initializing page-beta.cljs"]
    ;(repl/connect "http://localhost:9000/repl")
    (.log js/console msg)
    (om/root main-widget app-state {:target ALPHA-ROOT})))
