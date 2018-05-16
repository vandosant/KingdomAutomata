(ns api.core
  (:require [api.handler :as handler])
  (:gen-class))

(defn -main [& args]
  (println (handler/get-scientific-name (first args))))
