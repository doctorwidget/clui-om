(defproject clui-om "0.1.0-SNAPSHOT"
  :description "Om Laboratory"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2322"]
                 [compojure "1.1.8"]
                 [enlive "1.1.5"]]
  
  :plugins [[lein-ring "0.8.11"]
            [lein-cljsbuild "1.0.3"]]

  :source-paths ["src" "src/clj" "src/cljs"]
  :test-paths ["test" "test/clj" "test/cljs"]
  
  :ring {:handler clui-om.handler/app
         :auto-refresh? true
         :auto-reload? true}

  :profiles {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                                  [ring-mock "0.1.5"]]}}

  :cljsbuild {:builds
               [{:source-paths ["src/cljs"]
                 :id "dev"
                 :compiler {:pretty-print true
                            :output-to "resources/public/js/clui_om.js"
                            :optimizations :simple}}
                {:source-paths ["src/cljs"]
                 :id "prod"
                 :compiler {:output-to "resources/public/js/clui_om.min.js"
                            :optimizations :advanced
                            :externs []}}
                {:source-paths ["src/cljs" "test/cljs"]
                 :id "test"
                 :compiler {:output-to "resources/test/unit/clui_om_test.js"
                            :optimizations :whitespace }}]})
