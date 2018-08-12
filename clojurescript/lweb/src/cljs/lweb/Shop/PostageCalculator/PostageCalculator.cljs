(ns lweb.Shop.PostageCalculator
  (:require [rum.core :as rum]
            [cljs-react-material-ui.core :as ui]))


(rum/defc PostageCalculator [postageType]
    (def postageType ((rum/react state) :type))
    (defn handleChange [e] (SetType (get (get e "target") "value")))
    [:div
        [ui/FormControl {:error (= postageType 0)}
        [ui/InputLabel {:htmlFor "postage-simple"} "Postage"]
        [ui/Select {:value postageType :on-change (fn [e] (handleChange e)) :inputProps {"name" "postage" "id" "postage-simple"}}
            [ui/MenuItem {:value 0} [:em "None"]]
            [ui/MenuItem {:value 1} "Within Australia"]
            [ui/MenuItem {:value 2} "Outside Australia"]
        ]
        [ui/FormHelperText "Please select a postage option"]
    ]]
)
