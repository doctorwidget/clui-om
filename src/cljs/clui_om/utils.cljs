(ns clui-om.utils
  (:require [cljs.reader :as reader]
            [clojure.string :as s]
            [om.core :as om :include-macros true])
  (:import [goog.ui IdGenerator]))

(defn guid
  "Wraps Google Clojure Library to tersely get a guid. These
   are not UUIDs! They are just an increasing series of integers
   only guaranteed to be unique within one instantiation of these
   utils. Starts over at 1000 for every new instance."
   []
   (+ 1000 (-> IdGenerator
                .getInstance
                .getNextUniqueId)))

(defn with-id
  "Takes a map and returns a map with an extra parameter
   called :id, containing a guid."
  [m]
  (assoc m :id (guid)))

(defn value-from-node
  "Get the text value from a node, trimmed of whitespace.
   Returns a 2-tuple of text and the node itself (in case
   you want to alter the node based on its contents)"
  [owner field]
  (let [n (om/get-node owner field)
        v (-> n .-value s/trim)]
    (when-not (empty? v)
      [v n])))

(defn clear-nodes!
  "Sets all values in a sequence of nodes to the empty string."
  [& nodes]
  (doseq [n nodes]
    (set! (.-value n) "")))
