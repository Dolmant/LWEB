(ns lweb.DynamicReact
    (:require [rum.core :as rum]
    [lweb.DynamicReactState as DynamicReactState]
    [lweb.Shop.CartManagementState as CartManagementState]
    [cljs-react-material-ui.core :as ui]))

(defonce menuOpen (atom false))

(rum/defc IntroHeader < rum/reactive []
    (def shoppingCart((rum/react CartManagementState/state) :shoppingCart))
    (def category ((rum/react DynamicReactState/state) :category))
    (def introOn? true)
    [:header.introHeaderTemp
        [:div.container
            [:div.left
            (if (not introOn?)
            [:div
                [:a.menu {
                    :on-click (fn [_] (reset! menuOpen true))
                }
                    [:span
                        ≡
                    ]
                ]
                [ui/Drawer {
                    :open (rum/react menuOpen)
                    :on-close (fn [_] (reset! menuOpen false))
                }
                    [:div {:tab-index 0 :role "button" :on-click (fn [_] (reset! menuOpen false)) :on-key-down (fn [_] (reset! menuOpen false))}
                        [:ul.mobileMenu
                            (DynamicReact/NavMenu)
                        ]
                    ]
                ]
            ]
            [:div]
            )
            ]
            [:h1
            [:img {:on-click (fn [] (DynamicReactState/SelectPage "home")) :src "./assets/images/LEOTIDE.png" :alt "LeoTide"}]]
            [:div.right
            (if (and (not introOn?) (= category "CHECKOUT"))
            [:div.cursor {:on-click (fn [] (DynamicReactState/UpdateCategory "CHECKOUT"))}
                [:div.total-count (count shoppingCart)]
                [:i {:class "fa fa-shopping-cart"}]
            ]
            [:div]
            )
            ]
        ]
    ]
)
