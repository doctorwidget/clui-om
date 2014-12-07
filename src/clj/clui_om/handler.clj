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
  (GET "/kioo-om-tut" [] (views/kioo-om-tut-page))
  (GET "/bootstrap-demo" [] (views/bootstrap-demo-page))
  (GET "/page-alpha" [] (views/page-alpha))
  (GET "/page-beta" [] (views/page-beta))
  (GET "/page-gamma" [] (views/page-gamma))
  (GET "/draggable-demo" [] (views/draggable-page))
  (GET "/page-delta" [] (views/page-delta))
  (GET "/page-epsilon" [] (views/page-epsilon))
  (GET "/page-svg" [] (views/page-svg))
  (route/resources "/")
  (route/not-found "Not Found"))

(def app
  (handler/site app-routes))
