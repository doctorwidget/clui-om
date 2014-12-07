(ns clui-om.page-svg)

(def raphael-node "raphaelNode")
(def snap-node "snapNode")
(def svgjs-node "svgjsNode")
(def om-node "omNode")

(defn raphael-raw
  "A function for executing some plain JS->CLJS Raphael code,
  before we take the more-advanced step of Om integration."
  []
  (.log js/console (str "Instantiating Raphael on node id: " raphael-node))
  (let [paper (js/Raphael raphael-node 500 500)
        rect1 (.rect paper 20 30 100 12)]
    (.attr rect1 #js {"fill" "orange"})
    (.log js/console "finished initial paper")))

(defn ^:export main
  "Main entry point for page svg"
  []
  (let [msg "(main):: page_svg (main) function..."]
    (.log js/console msg)
    (raphael-raw)))

