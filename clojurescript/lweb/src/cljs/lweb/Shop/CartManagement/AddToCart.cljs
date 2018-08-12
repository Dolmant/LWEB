(ns lweb.Shop.CartManagement
    (:require [rum.core :as rum]
    [lweb.Shop.CartManagement :as CartManagement]
    [cljs-react-material-ui.icons :as ic]
    [cljs-react-material-ui.core :as ui]))

(defonce anchorEl (atom false))

(rum/defc AddToCart [mini]
    (def id ((rum/react DynamicReact/state) :overlay_image_num))
    (def type ((rum/react DynamicReact/state) :overlay_types))
    (defn handleClick []
        (if (types.length === 1) {
        (do toastr.success("Success", "Item added to cart")
        (CartManagementAddToCart id, (types 0))
        (reset! anchorEl (e :currentTarget))}))
    )

    (defn handleClose []
        (reset! anchorEl nil)
    )
    [:div {:style "display: inline block;"}
        [ui/Button {
            :variant (if mini "fab" "raised")
            :color "primary"
            :aria-label "add"
            :mini mini
            :aria-haspopup "true"
            onClick handleClick
        }
            (if mini [ic/add-icon] [:div "Add to cart"])
        ]
        [:ui/Menu {:id "simple-menu" :anchorEl (rum/react anchorEl) :open (rum/react anchorEl) onClose handleClose}
            (doseq [type types]
                [ui/menu-item {
                    :on-click (fn [] 
                    (do
                    ;toastr.success("Success", "Item added to cart")
                    (CartManagementAddToCart id, type)
                    (handleClose))
                }
                (type :desc)]
            )
        ]
    ]
)
