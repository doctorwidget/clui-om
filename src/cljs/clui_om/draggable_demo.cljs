(ns clui-om.draggable-demo)

   
(defn ^:export main
  "Initialize draggable-demo page"
  []
  (let [msg "main():: initializing draggable-demo.cljs"]
    (.log js/console msg)
    #_(om/root main-widget app-state {:target ALPHA-ROOT})))
