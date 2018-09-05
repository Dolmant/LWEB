(ns lweb.Shop.CartManagement.AddToCart
  (:require [rum.core :as rum]
            [lweb.Shop.CartManagement.State :as CartManagementState]
            [lweb.DynamicReact.State :as DynamicReactState]
            [lweb.wrappers.ic :as ic]
            ["toastr" :as toastr]
            [lweb.wrappers.ui :as ui]))

(defonce anchorEl (atom false))

(rum/defc AddToCart < rum/reactive [mini id types]
  (defn handleClick [e]
    (if (= 1 (count types))
      (do
        (toastr/success "Success" "Item added to cart")
        (CartManagementState/AddToCart id, (types 0)))
      (reset! anchorEl (.-currentTarget e))))

  (defn handleClose []
    (reset! anchorEl false))
  [:div {:style {:display "inline-block"}}
   (ui/button {:variant (if mini "fab" "raised")
               :color "primary"
               :aria-label "add"
               :mini mini
               :aria-haspopup "true"
               :on-click handleClick}
              (if mini (ic/addIcon) "Add to cart"))
   (ui/menu {:id "simple-menu" :anchorEl (rum/react anchorEl) :open (not= false (rum/react anchorEl)) :on-close handleClose}
            [(map (fn [type]
                    (ui/menu-item {:key (type :desc)
                                   :on-click (fn []
                                               (do
                                                 (toastr/success "Success" "Item added to cart")
                                                 (CartManagementState/AddToCart id, type)
                                                 (handleClose)))}
                                  (type :desc)))
                  types)])])
