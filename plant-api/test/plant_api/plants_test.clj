(ns plant-api.plants-test
  (:require [clojure.test :refer :all]
           [plant-api.plants :refer [plant]]))

(deftest getting-plant-names
  (testing "Getting horsemint"
    (is (= "Monarda fistulosa" (plant "horsemint"))))

  (testing "Getting snowberry"
    (is (= "Symphoricarpos occidentalis" (plant "snowberry")))))


