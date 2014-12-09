(ns clui-om.page-svg)


(def snap-node "#snapNode")
(def snap-beta "#snapNodeB")
(def snap-gamma "#snapNodeC")
(def om-node "omNode")

(defn snap-raw
  "A function for executing some plain JS->CLJS Snap code,
  before we take the more-advanced step of Om integration."
  []
  (.log js/console (str "Instantiating Snap on node id: " snap-node))
  (let [s (js/Snap snap-node)
        circA (.circle s 150 150 100)
        _ (.attr circA #js {:fill "#bada55" :stroke "#000" :strokeWidth 5})
        diskA (.circle s 100 150 70)
        diskB (.circle s 200 150 70)
        disks (.group s diskA diskB)
        _ (.attr disks #js {:fill "#fff"})
        _ (.attr circA #js {:mask disks})
        _ (.animate diskA #js {:r 40} 2000)
        _ (.animate (.select disks "circle:nth-child(2)") #js {:r 40} 2000)
        path1 (.path s "M10-5-10,15M15,0,0,15M0-5-20,15")
        _ (.attr path1 #js {:fill "none",
                            :stroke "#bada55",
                            :strokeWidth 5})
        pattern1 (.pattern path1 0 0 10 10)
        _ (.attr circA #js {:fill pattern1})
        _ (.attr disks #js {:fill (js/Snap "#patternAlpha")})
        _ (.attr disks #js {:fill "R(150, 150, 100)#fff-#000"})] 
    ))

(defn snap-raw-beta
  "A second *paper* because the first one is irritatingly long.
   Here we load an image into a paper, but then we need to transform it,
   because it starts out itty bitty. Note the string literal transform call."
  []
  (.log js/console (str "Instantiating Snap Beta block on node id: " snap-beta))
  (let [paper (js/Snap snap-beta)
        handler (fn [frag]
                  (let [group (.select frag "g")
                        _ (.append paper group)
                        _ (.attr group #js {:fill "skyblue"
                                            :transform "T50,50s2,2"})
                        _ (.drag group)]))]
    (.load js/Snap "images/gears3.svg" handler)))

(defn snap-raw-gamma
  "A third *paper*, this time attempting to load an external SVG without the
  need for any transformations. "
  []
  (.log js/console (str "Instantiated Snap Gamma block on node id: " snap-gamma))
  (let [paper (js/Snap snap-gamma)
        bg (.rect paper 0 0 80 80)
        _ (.attr bg #js {:fill "rgba(0,0,0,0)"})
        nested (.svg paper 0 0 80 80 0 0 200 200)
        wrapper (.group paper bg nested)
        handler (fn [frag]
                  (let [group (.select frag "g")
                        paths (.selectAll group "path")]
                    (.append nested group)
                    (.attr paths #js {:fill "magenta"})
                    (.hover bg (fn []
                                 (.animate paths #js {:fill "lime"} 500)
                                 (.animate bg #js {:fill "#CCCCCC"} 500))
                            (fn []
                              (.animate paths #js {:fill "magenta"} 500)
                              (.animate bg #js {:fill "#FFFFFF"} 500)))
                    (.drag wrapper)))]
    (.load js/Snap "images/bear18.svg" handler)))

(defn ^:export main
  "Main entry point for page svg"
  []
  (let [msg "(main):: page_svg (main) function..."]
    (.log js/console msg)
    (snap-raw)
    (snap-raw-beta)
    (snap-raw-gamma)))

