(ns clui-om.handler
  (:require [compojure.core :refer :all]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [clui-om.views.core :as views]
            [clui-om.react-om-tut :as rom]))

(defroutes app-routes
  (GET "/" [] (views/home-page))
  (GET "/vanilla" [] (views/vanilla-page))
  (GET "/react-tut" [] (views/react-tut-page))
  (GET "/react-om-tut" [] (views/react-tut-om-page))
  (GET "/react-om-tut/comments" [] (rom/all-comments))
  (POST "/react-om-tut/comments" req (rom/save-comment! req))
  (route/resources "/")
  (route/not-found "Not Found"))

(def app
  (handler/site app-routes))
