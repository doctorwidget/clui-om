(ns clui-om.misc.cards
  (:require [cljs.core.async :refer [put! <! >! chan]]
            [clojure.string :as s]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

;; I considered having two separate files for card-related functions; one for
;; generic card logic, and the other for Om components. But that seemed like
;; pretty significant overkill for this project, so it's all lumped together
;; here in one file. 

(def suits [:hearts :spades :clubs :diamonds])
(def ranks (range 1 14)) 

(def english-ranks [nil "ace" "two" "three" "four" "five"
               "six" "seven" "eight" "nine" "ten"
              "jack" "queen" "king"])

(defn pretty-rank [rank]
  (let [special {1 "A" 11 "J" 12 "Q" 13 "K"}
        pretty (special rank)]
    (if pretty pretty rank)))


(def entity-suits { :spades "&#9828;"
                     :hearts "&#9825;"
                     :diamonds "&#9826;"
                     :clubs "&#9831;"})

(defprotocol ICardUtils
  "Protocols for working with cards."
  (verbose-name [this] "A long human-readable name, e.g. `King of Hearts`")
  (terse-name [this] "Short name with suits as H, S, C or D, e.g. `KH`")
  (entity-name [this] "Short name with suits as unicode chars, e.g. `K&")
  (beats? [this other] "Quick check for higher ranking card")
  (red-black [this] "Returns :red or :black as appropriate"))

(defrecord Card [rank suit]
  ;; VERY IMPORTANT: see the implementation of the om/IToCursor protocol!
  ICardUtils
  (verbose-name [this]
    (str (nth english-ranks (:rank this)) " of " (name (:suit this))))
  (terse-name [this]
    (str (pretty-rank (:rank this)) (s/capitalize  (first (name (:suit this))))))
  (entity-name [this]
    (str (pretty-rank (:rank this)) (entity-suits (:suit this))))
  (beats? [this other]
    (> (:rank this) (:rank other)))
  (red-black [this]
    (if (#{:hearts :diamonds} (:suit this)) :red :black))
  ;; Om has a subtle problem with all (defrecord) instances! In the Om source
  ;; you can see that all cursors are passed to the (om/IToCursor) protocol at
  ;; some point. Since that protocol has no default implementation for record
  ;; instances, those instances get wrapped in a spurious MapCursor instance
  ;; layer, which breaks your ability to interact with them further. Therefore,
  ;; we implement a sensible default for that protocol. Presumably, this exact
  ;; same code should work as a fix for all (defrecord) definitions, which means
  ;; this is the sort of thing that might end up incorporated into the Om core
  ;; at some point. The flip side of this is that (I think) there's no way
  ;; *updating* the resulting pure value could possibly update the overall
  ;; application state. That means you should probably use (defrecord) inside Om
  ;; if and only if you are dealing with read-only tokens like playing cards,
  ;; and not for any potentially mutable data.
  om/IToCursor
  (-to-cursor [value state path]
    value))

(defn fresh-deck [] (for [r ranks s suits]
                      (->Card r s)))

(defn shuffled-deck []
  (shuffle (fresh-deck)))

(defn card-display-txt
  [card owner]
  "Displays a minimal, mostly-text display of a single card.
   Compare to the more-elaborate (card-display-gui)"
  (reify
    om/IRender
    (render [_]
      (let [col (red-black card)] 
        (dom/span #js {:className (str "cardDisplay " (name col))
                       :title (verbose-name card)
                       :alt (verbose-name card)
                       :dangerouslySetInnerHTML
                       #js {:__html (entity-name card)}})))))

(defn deck-display
  [cursor owner]
  "Displays the current deck count, plus two buttons: one to draw one card, and
  one to reshuffle the entire deck. The call to build this component (e.g.
  om/build) should include an :init-state map inside the opts parameter, and that
  map in turn should have :draw and :shuffle channels. Supplying this :init-state
  map means we don't need to implement the IInitState protocol in this class
  explicitly; we get our state object via the call to om/build instead."
  (reify
    om/IRenderState
    (render-state [_ {:keys [draw shuffle]}]
      (dom/div #js {:className "deckDisplay"}
               (dom/span #js {:className "deckIcon"}
                         (dom/img #js {:className "deckImg"
                                       :src "images/deckAlpha.png"
                                       :alt "Deck of cards (image)"
                                       :height 42
                                       :width 31})
                         (dom/span #js {:className "deckCensus"} (count (:deck cursor))))
               (dom/button #js {:className "btn btn-default"
                                :onClick (fn [e] (put! draw "(deck-display):: draw button click!"))
                                :type "button"} "Draw A Card")
               (dom/button #js {:className "btn btn-default"
                                :onClick #(put! shuffle "(deck-display):: shuffle btton click!")
                                :type "button"} "Shuffle Deck")))))

(defn hand-display
  [cursor owner]
  "Displays a set of currently-held cards."
  (reify
    om/IInitState
    (init-state [_]
      {:showing true})
    om/IRenderState
    (render-state [_ {:keys [showing]}]
      (let [hand (:hand cursor)]
        (.log js/console "hand-display rendering:: " (count hand) " cards in hand: " hand)
        (dom/div #js {:className "cardDisplay"}
                   (dom/div #js {:className "cardStatus"}
                            (dom/span #js {:className "numCards"} (count hand)) 
                              (dom/span #js {:className "showing"}
                                          (if showing  "Face up" "Face down")))
                   ;; om dom children must be either loose (as above)
                   ;; or turned into a JavaScript array (as below)
                   (apply dom/div #js {:className "cards"}
                          (om/build-all card-display-txt hand)))))))

