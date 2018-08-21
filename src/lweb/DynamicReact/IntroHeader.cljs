(ns lweb.DynamicReact.IntroHeader
    (:require [rum.core :as rum]
    [lweb.DynamicReact.State :as DynamicReactState]
    [lweb.DynamicReact.NavMenu :as NavMenu]
    [lweb.Shop.CartManagement.State :as CartManagementState]
    [lweb.wrappers.ui :as ui]
    [lweb.wrappers.ic :as ic]
))

(defonce menuOpen (atom false))

(rum/defc IntroHeader < rum/reactive []
    (def shoppingCart((rum/react CartManagementState/State) :shoppingCart))
    (def category ((rum/react DynamicReactState/State) :category))
    (def introOn? false)
    [:header.introHeaderTemp
        [:div.container
            [:div.left
                (if (not introOn?)
                    [:div
                        [:a.menu {
                            :on-click (fn [_] (reset! menuOpen true))
                        }
                            [:span
                                "≡"
                            ]
                        ]
                        (ui/drawer {
                                :open (not= false (rum/react menuOpen))
                                :on-close (fn [_] (reset! menuOpen false))
                            }
                            [:div {:tab-index 0 :role "button" :on-click (fn [_] (reset! menuOpen false)) :on-key-down (fn [_] (reset! menuOpen false))}
                                [:ul.mobileMenu
                                    (NavMenu/NavMenu)
                                ]
                            ]
                        )
                    ]
                    [:div]
                )
            ]
            [:h1
            [:img {:on-click (fn [] (DynamicReactState/SetPage "home")) :src "./assets/images/LEOTIDE.png" :alt "LeoTide"}]]
            [:div.right
                (if (and (not introOn?) (not= category :CHECKOUT))
                    [:div.cursor {:on-click (fn [] (DynamicReactState/SetCategory :CHECKOUT))}
                        [:div.total-count (count shoppingCart)]
                        (ic/shoppingCartIcon)
                    ]
                    [:div]
                )
            ]
        ]
    ]
)
