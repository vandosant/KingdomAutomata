(ns ^:figwheel-no-load web.dev
  (:require
    [web.core :as core]
    [devtools.core :as devtools]))


(enable-console-print!)

(devtools/install!)

(core/init!)
