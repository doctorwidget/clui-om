(ns clui-om.utils
  (:require [cljs.reader :as reader])
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
