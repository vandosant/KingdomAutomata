(ns plant-api.handler
  (:require [plant-api.plants :refer :all]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
            [ring.util.response :as response :refer [response]]
            [ring.middleware.json :refer [wrap-json-response]]))

(defroutes app-routes
  (GET "/plants" []
    (response (plants)))

  (GET "/plants/:name" [name]
    (response {:message (plant name)}))

  (route/not-found
    (response/not-found {:message "Not Found"})))

(def app
  (-> app-routes
    (wrap-json-response)
    (wrap-defaults api-defaults)))
