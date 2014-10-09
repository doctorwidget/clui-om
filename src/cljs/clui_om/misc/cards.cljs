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
    (if (#{:hearts :diamonds} (:suit this)) :red :black)))

(defn fresh-deck [] (for [r ranks s suits]
                         (->Card r s)))

(defn card-display-txt
  [cursor owner]
  "Displays a minimal, mostly-text display of a single card.
   Compare to the more-elaborate (card-display-gui)"
  (reify
    om/IRender
    (render [_]
      (let [card (:card cursor)
            col (red-black card)] 
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
                (dom/span #js {:className "glyphicon glyphicon-align-justify"})
                (dom/span #js {:className "deckCensus"} (str "(" (count (:deck cursor))  " cards)")))
               (dom/button #js {:className "btn btn-default"
                                :onClick (fn [e] (put! draw "(deck-display):: draw button click!"))
                                :type "button"} "Draw A Card")
               (dom/button #js {:className "btn btn-default"
                                :onClick #(put! shuffle "(deck-display):: shuffle btton click!")
                                :type "button"} "Shuffle Deck")))))
