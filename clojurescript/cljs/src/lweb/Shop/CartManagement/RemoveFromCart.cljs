(ns lweb.Shop.CartManagement.RemoveFromCart
  (:require [rum.core :as rum]
            [lweb.DynamicReact.State :as DynamicReactState]
            [lweb.Shop.CartManagement.State :as CartManagementState]
            [cljs-react-material-ui.icons :as ic]
            [cljs-react-material-ui.rum :as ui]))


(rum/defc RemoveFromCart < rum/reactive [mini]
    (def id ((rum/react DynamicReactState/State) :overlay_image_num))
    (def type1 ((rum/react DynamicReactState/State) :overlay_types))
    [:div {:style "display: inline-block;"}
        (ui/button {
                    :mini mini
                    :variant (if mini "fab" "raised")
                    :color "secondary"
                    :on-click (fn [_]
                        ;toastr.success ("Success", "Item removed from cart")
                        (CartManagementState/RemoveFromCart id type1)
                    )
        } (if mini [ic/content-remove "Remove from cart"]))
    ]
)
