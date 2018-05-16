(ns api.handler-test
  (:require [clojure.test :refer :all]
           [api.handler :refer [get-scientific-name]]))

(deftest getting-plant-names
  (testing "Getting horsemint"
    (is (= "Monarda fistulosa" (get-scientific-name "horsemint"))))

  (testing "Getting snowberry"
    (is (= "Symphoricarpos occidentalis" (get-scientific-name "snowberry")))))

