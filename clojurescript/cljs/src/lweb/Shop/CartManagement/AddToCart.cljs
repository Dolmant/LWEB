(ns lweb.Shop.CartManagement.AddToCart
    (:require [rum.core :as rum]
    [lweb.Shop.CartManagement.State :as CartManagementState]
    [lweb.DynamicReact.State :as DynamicReactState]
    [cljs-react-material-ui.icons :as ic]
    ["toastr" :as toastr]
    [cljs-react-material-ui.rum :as ui])
)

(defonce anchorEl (atom false))

(rum/defc AddToCart < rum/reactive [mini id types]
    (defn handleClick [e]
        (if (= 1 (count types))
        (do
            (println "Item added to cart")
            (toastr/success "Success" "Item added to cart")
            (CartManagementState/AddToCart id, (types 0)))
        (reset! anchorEl (.-currentTarget e)))
    )

    (defn handleClose []
        (reset! anchorEl false)
    )
  (js/console.log @anchorEl)
  (println (rum/react anchorEl))
  (js/console.log (rum/react anchorEl))
    [:div {:style {:display "inline-block"}}
        (ui/button {
            :variant (if mini "fab" "raised")
            :color "primary"
            :aria-label "add"
            :mini mini
            :aria-haspopup "true"
            :on-click handleClick
        }
            (if mini (ic/addIcon) "Add to cart")
        )
        (ui/menu {:id "simple-menu" :anchorEl (rum/react anchorEl) :open (rum/react anchorEl) :on-close handleClose}
            [(map (fn [type]
                (ui/menu-item {
                    :key (type :desc)
                    :on-click (fn [] 
                    (do
                        (toastr/success "Success" "Item added to cart")
                        (CartManagementState/AddToCart id, type)
                        (handleClose)))
                }
                (type :desc)))
                 types
            )]
        )
    ]
)
