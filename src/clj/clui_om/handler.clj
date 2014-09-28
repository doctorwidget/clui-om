(ns clui-om.handler
  (:require [compojure.core :refer :all]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [clui-om.views.core :as views]))

(defroutes app-routes
  (GET "/" [] (views/home-page))
  (GET "/vanilla" [] (views/vanilla-page))
  (GET "/react-tut" [] (views/react-tut-page))
  (GET "/react-tut-om" [] (views/react-tut-om-page))
  (route/resources "/")
  (route/not-found "Not Found"))

(def app
  (handler/site app-routes))
