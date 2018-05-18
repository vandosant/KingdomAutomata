(ns web.core
    (:require
      [reagent.core :as r]
      [ajax.core :as ajax]))

;; -------------------------
;; State

(def plant (r/atom ""))
(def plants (r/atom []))
(def scientific-name (r/atom ""))

(def api-url "http://localhost:3000")

;; -------------------------
;; Actions

(defn get-plant []
  (ajax/GET (str api-url "/plants/" @plant)
            {:handler #(do (reset! scientific-name (str %))
                           (reset! plant ""))}))

(defn get-plants []
  (ajax/GET (str api-url "/plants")
            {:handler #(reset! plants %)}))

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
     [:p @scientific-name]
     [:p (str @plants)]
     [plant-entry]
     [plant-submit]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (get-plants)
  (mount-root))
