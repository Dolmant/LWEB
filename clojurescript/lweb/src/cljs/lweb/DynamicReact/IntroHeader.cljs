(ns lweb.DynamicReact.IntroHeader
    (:require [rum.core :as rum]
    [lweb.DynamicReact.Actions as :Actions]
    [lweb.DynamicReact.NavMenu as :NavMenu]
    [cljs-react-material-ui.core :as ui]))



(rum/defc IntroHeader [introOn, category, shoppingCart, onScrollOver, onHomeClick, updateCategory, touchmenu_active, menuOpen]
    [:header.introHeaderTemp
        [:div.container
            [:div.left
            (if (not introOn)
            [:div
                [:a.menu {
                    :on-click (fn [] setstate(menuOpen = true))
                }
                    [:span
                        ≡
                    ]
                ]
                [ui/Drawer {
                    :open menuOpen
                    :on-close (fn [] setstate(menuOpen = false))
                }
                    [:div {:tab-index 0 :role "button" :on-click (fn [] setstate(menuopen = false)) :on-key-down (fn [] setstate(menuopen = false))}
                        [:ul.mobileMenu
                            [NavMenu/NavMenu]
                        ]
                    ]
                ]
            ]
            [:div]
            )
            ]
            [:h1
            [:img {:on-click (fn [] (Actions/onHomeClick)) :src "./assets/images/LEOTIDE.png" :alt "LeoTide"}]]
            [:div.right
            (if (and (not introOn) (= category "CHECKOUT"))
            [:div.cursor {:on-click (fn [] (actions/updateCategory "CHECKOUT"))}
                [:div.total-count (count shoppingCart)]
                [:i {:class "fa fa-shopping-cart"}]
            ]
            [:div]
            )
            ]
        ]
    ]
)
