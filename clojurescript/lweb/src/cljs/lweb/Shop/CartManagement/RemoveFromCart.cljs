(ns lweb.Shop.CartManagement.RemoveFromCart
  (:require [rum.core :as rum]
            [lweb.Shop.CartManagement.CartManagementActions :as Actions]
            [cljs-react-material-ui.core :as ui]))


(rum/defc RemoveFromCart [id type mini removeFromCart]
    [:div {:style "display: inline-block;"}
        [ui/Button {
                    mini: mini
                    :variant (if mini "fab" "raised")
                    color "secondary"
                    :on-click (fn []
                        toastr.success ("Success", "Item removed from cart")
                        Actions.actionCreators.removeFromCart (this.props.id, this.props.type)
                    )
        } (if mini [ic/remove-icon "Remove from cart"])]
    ]
)
