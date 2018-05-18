(defproject plant-api "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [compojure "1.6.0"]
                 [ring/ring-defaults "0.3.1"]
                 [ring-cors "0.1.12"]
                 [ring/ring-json "0.4.0"]
                 [uswitch/lambada "0.1.2"]
                 [cheshire "5.7.1"]
                 [ring-apigw-lambda-proxy "0.3.0"]]
  :plugins [[lein-ring "0.9.7"]
            [lein-lambda "0.2.0"]]
  :ring {:handler plant-api.handler/app}
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring/ring-mock "0.3.1"]]}
   :uberjar {:aot :all}}
  :lambda {:function {:name "plant-api"
                      :handler "plant-api.lambda.LambdaFn"}
           :api-gateway {:name "plant-api"}
           :stages {"production" {:warmup {:enable false}}
                    "staging"    {}}})
