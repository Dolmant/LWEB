(ns lweb.Shop.Checkout.Checkout
  (:require [rum.core :as rum]
            [lweb.Shop.CartManagement.CartManagementActions :as CartActions]
            [lweb.Shop.CartManagement.AddToCart :as AddToCart]
            [lweb.Shop.CartManagement.RemoveFromCart :as RemoveFromCart]
            [lweb.Shop.PostageCalculator.PostageCalculator :as PostageCalculator]
            [cljs-react-material-ui.core :as ui]))


(rum/defc Checkout [setName setEmail setAddress payNow emptyCart shoppingCart total loading paid postage]
    (def items (doseq [item shoppingCart] 
        [ui/Grid {:container true :key index :alignItems "center" :class "shopping-list-item"
            [ui/Grid {:class "shopping-list-column" :xs 2}
                [:img {:alt "Not found" :src (get item :img_src)}]
            ]
            [ui/Grid {:class "shopping-list-column" :xs 1}
                (get item :count)
            ]
            [ui/Grid {:class "shopping-list-column" :xs 3}
                (get item :img_txt)
            ]
            [ui/Grid {:class "shopping-list-column" :xs 2}
                (get (get item :type) :id)
            ]
            [ui/Grid {:class "shopping-list-column" :xs 2}
                (+ "$" (get (get item :type) :cost))
            ]
            [ui/Grid {:class "shopping-list-column" :xs 2}
                [AddToCart/AddToCart {
                    :id (get item :item_number)
                    :types (get item :types)
                    :mini mini
                }]
                [RemoveFromCart/RemoveFromCart {
                    :id (get item :item_number)
                    :types (get item :types)
                    :mini mini
                }]
            ]
        ]))
        (if (= 0 (count items))
            [:div.empty-cart "You have nothing in your cart!"]
            (if loading
                [:div.empty-cart
                    [PacManLoader {:loading}]
                ]
                (if paid
                    [:div.empty-cart "Thanks for your purchase!"]
                    [ui/Grid {:container true :class "checkout" :alignItems "center" :direction "column"}
                        [ui/Grid {:item true :xs 12 :md 6 :lg 6}
                            [:h2 "Checkout"]
                        ]
                        [ui/Grid {:item true :xs 12 :md 6 :lg 6}
                            [ui/Grid {:container true}
                                [ui/Grid {:item true :xs 12}
                                    [ui/Grid {:container true :class "shopping-list-title"}
                                        [ui/Grid {:item true :class "shopping-list-column" :xs 2 "Image"}]
                                        [ui/Grid {:item true :class "shopping-list-column" :xs 1 "Qty"}]
                                        [ui/Grid {:item true :class "shopping-list-column" :xs 3 "Description"}]
                                        [ui/Grid {:item true :class "shopping-list-column" :xs 2 "Finish"}]
                                        [ui/Grid {:item true :class "shopping-list-column" :xs 2 "Price"}]
                                        [ui/Grid {:item true :class "shopping-list-column" :xs 2 "Actions"}]
                                    ]
                                ]
                                [ui/Grid {:item true :xs 12}
                                    (items)
                                    [ui/Grid {:container true :class "shopping-list-item" :key "a"}
                                        [ui/Grid {:item true :class "shopping-list-column" :xs 2 "Image"}]
                                        [ui/Grid {:item true :class "shopping-list-column" :xs 1 "Qty"}]
                                        [ui/Grid {:item true :class "shopping-list-column" :xs 3 "Description"}]
                                        [ui/Grid {:item true :class "shopping-list-column" :xs 2 "Finish"}]
                                        [ui/Grid {:item true :class "shopping-list-column" :xs 2 "Price"}]
                                        [ui/Grid {:item true :class "shopping-list-column" :xs 2 "Actions"}]
                                    ]
                                ]
                                [ui/Grid {:item true :class "total" :xs 12}
                                    (+ {"Total (incl. GST): $" total)
                                ]
                            ]
                        ]
                        [ui/Grid {:item true :class "total" :xs 12 :md 6 :lg 6}
                            [PostageCalculator/PostageCalculator]
                        ]
                        [ui/Grid {:item true :class "total" :xs 12 :md 6 :lg 6}
                            (if postage
                                (StripeCheckout/StripeCheckout {:token payNow :stripeKey "pk_live_PrBOTAQyZjAJScTTYykAuOz0" :amount (* total 100) :currency "AUD" :shippingAddress shippingAddress :billingAddress billingAddress})
                                [:div]
                            )
                            [:h2 "Checkout"]
                        ]
                    ]
                )
            )
        )
)
