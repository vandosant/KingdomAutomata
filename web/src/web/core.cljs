(ns web.core
    (:require
      [reagent.core :as r]
      [ajax.core :as ajax]))

;; -------------------------
;; State

(def plant (r/atom ""))

(def api-url "https://2n1ft8kc6i.execute-api.us-east-1.amazonaws.com/production")

;; -------------------------
;; Actions

(defn get-plant []
  (ajax/GET (str api-url "/plants/" @plant)
            {:handler #(reset! plant "")}))

;; -------------------------
;; Views
(defn plant-entry []
  [:input {:type "text"
           :placeholder "Enter your plant name"
           :value @plant
           :on-change #(reset! plant (-> % .-target .-value))}])

(defn plant-submit []
  [:input {:type "button"
           :value "Submit"
           :on-click #(get-plant)}])

(defn home-page []
  [:div
     [:h2 "Welcome to KingdomAutomata"]
     [:p @plant]
     [plant-entry]
     [plant-submit]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
