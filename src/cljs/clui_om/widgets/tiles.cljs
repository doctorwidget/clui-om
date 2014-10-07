(ns clui-om.widgets.tiles
   (:require [om.core :as om :include-macros true]
             [om.dom :as odom :include-macros true]))

(def PROTOGENIE {:slate "#BBCCDD"
                      :navy "#003366"
                      :haze "#EEEFFF"
                      :gold "#FFCC00"
                      :tan "#EEBB66"})

(def CAMPFIRE {:green "#588C73"
               :cream "#F2E394"
               :orange "#F2AE72"
               :flame "#D96459"
               :brick "#8C4646"
               })

(def OSAKI {:orange "#FF9700"
            :umber "#CC6600"
            :green "#999900"
            :brown "#333300"
            :purple "#660066"
            })

(def NYC {:mauve "#753A48"
          :brown "#954F47"
          :rust "#C05949"
          :sky "#9AADBD"
          :soylent "#CBBB58"
          })

(def CHEERY {
             :lime "#B1EB00"
             :baby "#53BBF4"
             :pink "#FF85CB"
             :red "#FF432E"
             :pumpkin "#FFAC00"
             })

(def DEFAULT-COLORS (vals PROTOGENIE))

(def DEFAULTS {:cell-size 40
               :tile-size 24
               :colors DEFAULT-COLORS})

(defn square-div [size]
  {:width size
   :min-width size
   :max-width size
   :min-height size
   :max-height size})

(defn toggle-pause [_ cursor owner state]
  (let [new-pause (not (:paused state))
        idx (:index @cursor)]  ;; fn is *outside* of render, hence ``@``
    (.log js/console "Toggle pause to " new-pause ". Saved index: " idx)
    (om/set-state! owner :paused new-pause)
    (om/set-state! owner :saved-index idx)))

(defn color-tile [cursor owner opts]
  (reify
    om/IInitState
    (init-state [_]
      {:paused false
       :saved-index 0})
    om/IRenderState
    (render-state [_ state]
      (let [settings (:settings cursor)
            cell-size (:cell-size settings)
            tile-size (:tile-size settings)
            colors (:colors settings)
            gap (- cell-size tile-size)
            paused (:paused state)
            idx (if paused
                    (:saved-index state)
                    (:index cursor))
            color (nth colors idx)] 
        (odom/div (clj->js {:style
                             (clj->js 
                              (merge (square-div cell-size)
                                     {:border-style "solid"
                                      :border-width (if paused "4px" "1px")
                                      :border-color (if paused "#000000" "#EEEEEE")
                                      :display "inline-block"}))})
            (odom/div (clj->js 
                       {:onClick #(toggle-pause % cursor owner state)
                        :style
                        (clj->js (merge (square-div tile-size)
                                        {:backgroundColor color
                                         :position "relative"
                                         :left (/ gap 2)
                                         :top (/ gap 2)}))})))))))
 
