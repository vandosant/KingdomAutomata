(ns plant-api.plants)

(def plant-names {:horsemint "Monarda fistulosa"
          :snowberry "Symphoricarpos occidentalis"
          :yarrow "Achillea millefolium (A.lanatum)"})

(defn plants []
  (keys plant-names))

(defn plant [common-name]
  (-> common-name
      (keyword)
      (plant-names)
      (format name)))

