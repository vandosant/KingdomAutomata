(ns api.handler)

(def plant-names {:horsemint "Monarda fistulosa"
          :snowberry "Symphoricarpos occidentalis"
          :yarrow "Achillea millefolium (A.lanatum)"})

(defn get-scientific-name [common-name]
  (-> common-name
      (keyword)
      (plant-names)
      (format name)))
