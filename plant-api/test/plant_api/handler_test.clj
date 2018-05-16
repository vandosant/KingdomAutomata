(ns plant-api.handler-test
  (:require [clojure.test :refer :all]
            [ring.mock.request :as mock]
            [plant-api.handler :refer :all]))

(deftest test-app
  (testing "main route"
    (let [response (app (mock/request :get "/hello"))]
      (is (= (:status response) 200))
      (is (= (:body response) "{\"message\":\"Hello World\"}"))))

  (testing "not-found route"
    (let [response (app (mock/request :get "/invalid"))]
      (is (= (:status response) 404)))))
