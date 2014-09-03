(ns clui-om.handler
  (:require [compojure.core :refer :all]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [clui-om.views.core :as views]))

(defroutes app-routes
  (GET "/" [] (views/home-page))
  (GET "/vanilla" [] (views/vanilla-page))
  (route/resources "/")
  (route/not-found "Not Found"))

(def app
  (handler/site app-routes))
