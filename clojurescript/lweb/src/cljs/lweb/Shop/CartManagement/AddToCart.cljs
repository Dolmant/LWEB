(ns lweb.Shop.CartManagement.AddToCart
    (:require [rum.core :as rum]
    [lweb.Shop.CartManagement.State :as CartManagementState]
    [lweb.DynamicReact.State :as DynamicReactState]
    [cljs-react-material-ui.icons :as ic]
    [cljs-react-material-ui.rum :as ui])
)

(defonce anchorEl (atom false))

(rum/defc AddToCart < rum/reactive [mini]
    (def id ((rum/react DynamicReactState/State) :overlay_image_num))
    (def types ((rum/react DynamicReactState/State) :overlay_types))
    (defn handleClick [e]
        (if (= 1 (count types))
        (do
        ;toastr.success("Success", "Item added to cart")
        (CartManagementState/AddToCart id, (types 0))
        (reset! anchorEl (e :currentTarget))))
    )

    (defn handleClose []
        (reset! anchorEl nil)
    )
    [:div {:style "display: inline block;"}
        [ui/button {
            :variant (if mini "fab" "raised")
            :color "primary"
            :aria-label "add"
            :mini mini
            :aria-haspopup "true"
            :on-click handleClick
        }
            (if mini [ic/content-add] [:div "Add to cart"])
        ]
        [:ui/menu {:id "simple-menu" :anchorEl (rum/react anchorEl) :open (rum/react anchorEl) :on-close handleClose}
            (doseq [type types]
                [ui/menu-item {
                    :on-click (fn [] 
                    (do
                    ;toastr.success("Success", "Item added to cart")
                    (CartManagementState/AddToCart id, type)
                    (handleClose)))
                }
                (type :desc)]
            )
        ]
    ]
)
