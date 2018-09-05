(ns lweb.Shop.CartManagement.RemoveFromCart
  (:require [rum.core :as rum]
            ["toastr" :as toastr]
            [lweb.DynamicReact.State :as DynamicReactState]
            [lweb.Shop.CartManagement.State :as CartManagementState]
            [lweb.wrappers.ic :as ic]
            [lweb.wrappers.ui :as ui]))


(rum/defc RemoveFromCart < rum/reactive [mini id type1]
  [:div {:style {:display "inline-block"}}
   (ui/button {:mini mini
               :variant (if mini "fab" "raised")
               :color "secondary"
               :on-click (fn [_]
                           (toastr/success "Success", "Item removed from cart")
                           (CartManagementState/RemoveFromCart id type1))}
              (if mini
                (ic/removeIcon "Remove from cart")))])
