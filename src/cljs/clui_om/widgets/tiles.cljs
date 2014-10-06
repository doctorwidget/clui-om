(ns clui-om.widgets.tiles
   (:require [om.core :as om :include-macros true]
             [om.dom :as odom :include-macros true]))

(def DEFAULT-PALETTE {:slate "#BBCCDD"
                      :navy "#003366"
                      :haze "#EEEFFF"
                      :gold "#FFCC00"
                      :tan "#EEBB66"
                      :white "#FFFFFF"})

(def DEFAULT-COLORS (vals DEFAULT-PALETTE))

(def DEFAULTS {:cell-size 80
               :tile-size 50
               :colors DEFAULT-COLORS})

(defn square-div [size]
  {:width size
   :min-width size
   :max-width size
   :min-height size
   :max-height size})

(defn color-tile [cursor owner opts]
  (reify
    om/IRender
    (render [_]
      (let [cell-size (:cell-size cursor)
            tile-size (:tile-size cursor)
            gap (- cell-size tile-size)
            color (first (:colors cursor))] 
        (odom/div (clj->js {:style
                             (clj->js 
                              (merge (square-div cell-size)
                                     {:border-style "solid"
                                      :border-width "1px"
                                      :display "inline-block"}))})
            (odom/div (clj->js 
                       {:style
                        (clj->js (merge (square-div tile-size)
                                        {:backgroundColor color
                                         :position "relative"
                                         :left (/ gap 2)
                                         :top (/ gap 2)}))})))))))
 
