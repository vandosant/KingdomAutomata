(ns plant-api.lambda
  (:require [uswitch.lambada.core :refer [deflambdafn]]
            [clojure.java.io :as io]
            [ring.middleware.apigw :refer [wrap-apigw-lambda-proxy]]
            [cheshire.core :as cheshire]
            [plant-api.handler :refer [app]]))

(def lambda-handler (wrap-apigw-lambda-proxy app {:scheduled-event-route "/warmup"}))

(deflambdafn plant-api.lambda.LambdaFn [in out ctx]
  (with-open [writer (io/writer out)]
    (-> in
        (io/reader :encoding "UTF-8")
        (cheshire/parse-stream true)
        (lambda-handler)
        (cheshire/generate-stream writer))))
