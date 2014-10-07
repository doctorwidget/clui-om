(ns clui-om.widgets.palettes
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
               :brick "#8C4646"})

(def OSAKI {:orange "#FF9700"
            :umber "#CC6600"
            :green "#999900"
            :brown "#333300"
            :purple "#660066"})

(def NYC {:mauve "#753A48"
          :brown "#954F47"
          :rust "#C05949"
          :sky "#9AADBD"
          :soylent "#CBBB58"})

(def CHEERY {:lime "#B1EB00"
             :baby "#53BBF4"
             :pink "#FF85CB"
             :red "#FF432E"
             :pumpkin "#FFAC00"})

(def palettes {:protogenie PROTOGENIE
               :campfire CAMPFIRE
               :osaki OSAKI
               :nyc NYC
               :cheery CHEERY})

(defn parse-choice [e callback]
  (let [target (.-target e)
        selected (.-value target)
        kw (keyword selected)
        palette (palettes kw)]
    (callback palette)))

(defn palette-chooser
  [cursor owner {:keys [callback]}]
  (reify
    om/IRender
    (render [_]
      (apply odom/select #js {:onChange #(parse-choice % callback)}
             (map #(odom/option (clj->js {:value (name %)}) (name %))  
                  (keys palettes))))))  



;; (odom/option #js {:value "one"} "ONE")
