(defproject clui-om "0.1.0-SNAPSHOT"
  :description "Om Laboratory"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2322"]
                 [cheshire "5.3.1"]
                 [cljs-http "0.1.16"]
                 [compojure "1.1.8"]
                 [enlive "1.1.5"]
                 [kioo "0.4.0"]
                 [om "0.7.3"]
                 [racehub/om-bootstrap "0.3.0"]
                 [markdown-clj "0.9.54"]]
  
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
                            :source-map "resources/public/js/clui_om.js.map"
                            :output-dir "resources/public/js/out-dev"
                            ;:optimizations :simple
                            :optimizations :whitespace
                            ;:preamble ["lib/react.js"]
                            :externs ["lib/react-externs.js"
                                      "lib/joy-externs.js"
                                      "lib/raphael.js"]
                            }}
                {:source-paths ["src/cljs"]
                 :id "prod"
                 ;; IMPORTANT: no duplicate output-dirs allowed! Each source map
                 ;; target must have a unique :output-dir, just as it has a
                 ;; unique :source-map property. The compiled file will contain
                 ;; the correct cross-reference automatically.
                 :compiler {:output-to "resources/public/js/clui_om.min.js"
                            :source-map "resources/public/js/clui_om.min.js.map"
                            :output-dir "resources/public/js/out"
                            :optimizations :advanced
                            ;:preamble ["lib/react.min.js"]
                            :externs ["lib/react-externs.js"
                                      "lib/joy-externs.js"
                                      "lib/raphael.js"]}}
                {:source-paths ["src/cljs" "test/cljs"]
                 :id "test"
                 :compiler {:output-to "resources/test/unit/clui_om_test.js"
                            :optimizations :whitespace }}]})
