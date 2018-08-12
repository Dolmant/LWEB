(ns lweb.Shop.CartManagement
  (:require [rum.core :as rum]
            [lweb.DynamicReact :as DynamicReact]
            [cljs-react-material-ui.icons :as ic]
            [cljs-react-material-ui.core :as ui]))


(rum/defc RemoveFromCart [mini]
    (def id ((rum/react DynamicReact/state) :overlay_image_num))
    (def type ((rum/react DynamicReact/state) :overlay_types))
    [:div {:style "display: inline-block;"}
        [ui/Button {
                    mini: mini
                    :variant (if mini "fab" "raised")
                    color "secondary"
                    :on-click (fn [_]
                        ;toastr.success ("Success", "Item removed from cart")
                        (CartManagement/RemoveFromCart id type)
                    )
        } (if mini [ic/remove-icon "Remove from cart"])]
    ]
)
