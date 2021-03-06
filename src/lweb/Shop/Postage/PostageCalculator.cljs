(ns lweb.Shop.Postage.PostageCalculator
  (:require [rum.core :as rum]
            [lweb.Shop.Postage.State :as PostageState]
            [lweb.wrappers.ui :as ui]))


(rum/defc PostageCalculator < rum/reactive []
  (def postageType ((rum/react PostageState/State) :type))
  (defn handleChange [e] (PostageState/SetType (.-value (.-target e))))
  [:div
   (ui/form-control {:error (= postageType 0)}
                    (ui/input-label {:htmlFor "postage-simple"} "Postage")
                    (ui/select {:value postageType :on-change (fn [e] (handleChange e)) :inputProps {"name" "postage" "id" "postage-simple"}}
                               (ui/menu-item {:value 0} [:em "None"])
                               (ui/menu-item {:value 1} "Within Australia")
                               (ui/menu-item {:value 2} "Outside Australia"))
                    (if (= 0 postageType) (ui/form-helper-text "Please select a postage option")))])
