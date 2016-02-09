(ns clui-om.widgets.tiles
  (:require [clui-om.widgets.palettes :as p]
            [om.core :as om :include-macros true]
            [om.dom :as odom :include-macros true]))

(def DEFAULTS {:cell-size 40
               :tile-size 24})

(defn square-div [size]
  {:width size
   :min-width size
   :max-width size
   :min-height size
   :max-height size})

(defn toggle-pause [_ cursor owner state]
  (let [new-pause (not (:paused state))
        color (:color @cursor)]  ;; fn is *outside* of render, hence ``@``
    (.log js/console "Toggle pause to " new-pause ". Saved color: " color)
    (om/set-state! owner :paused new-pause)
    (om/set-state! owner :saved-color color)))

(defn color-tile [cursor owner opts]
  (reify
    om/IInitState
    (init-state [_]
      {:paused false
       :saved-color (first (vals p/DEFAULT-PALETTE))})
    om/IRenderState
    (render-state [_ state]
      (let [settings (:settings cursor)
            paused (:paused state)
            border-width (if paused 4 1)
            cell-size (:cell-size settings)
            tile-size (:tile-size settings)
            gap (if paused
                  (- cell-size tile-size (* 2 border-width))
                  (- cell-size tile-size))
            color (if paused
                    (:saved-color state)
                    (:color cursor))] 
        (odom/div (clj->js {:style
                             (clj->js 
                              (merge (square-div cell-size)
                                     {:border-style "solid"
                                      :border-width (str border-width "px")
                                      :border-color (if paused "#000000" "#EEEEEE")
                                      :display "inline-block"
                                      :position "relative"}))})
            (odom/div (clj->js 
                       {:onClick #(toggle-pause % cursor owner state)
                        :style
                        (clj->js (merge (square-div tile-size)
                                        {:backgroundColor color
                                         :position "absolute"
                                         :left (/ gap 2)
                                         :top (/ gap 2)}))})))))))
 
