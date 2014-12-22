(ns clui-om.test.handler
  (:require [clojure.string :refer [join]]
            [clojure.test :refer :all]
            [clui-om.handler :refer :all]
            [ring.mock.request :as mock]))

(deftest test-app
  (testing "main route"
    (let [response (app (mock/request :get "/"))]
      (is (= (:status response) 200))
      (is (boolean (re-seq #"Clui-Om Home" (join (:body response)))))))
  
  (testing "not-found route"
    (let [response (app (mock/request :get "/invalid"))]
      (is (= (:status response) 404)))))
