(ns lweb.Shop.CartManagement.Checkout
  (:require [rum.core :as rum]
            [lweb.Shop.CartManagement.State :as CartManagementState]
            [lweb.Shop.CartManagement.AddToCart :as AddToCart]
            [lweb.Shop.CartManagement.RemoveFromCart :as RemoveFromCart]
            [lweb.Shop.Postage.PostageCalculator :as PostageCalculator]
            [clojure.string :as str]
            ["react-spinners" :as Spinners]
            [lweb.Shop.Postage.State :as PostageState]
            [cljs-react-material-ui.rum :as ui]))


(rum/defc Checkout < rum/reactive []
    (def shoppingCart ((rum/react CartManagementState/State) :shoppingCart))
    (def total ((rum/react CartManagementState/State) :total))
    (def loading ((rum/react CartManagementState/State) :loading))
    (def paid ((rum/react CartManagementState/State) :paid))
    (def postage ((rum/react PostageState/State) :cost))
    (def items (doseq [[item index] (map-indexed vector shoppingCart)] 
        [ui/grid {:container true :key index :alignItems "center" :class "shopping-list-item"}
            [ui/grid {:class "shopping-list-column" :xs 2}
                [:img {:alt "Not found" :src (get item :img_src)}]
            ]
            [ui/grid {:class "shopping-list-column" :xs 1}
                (get item :count)
            ]
            [ui/grid {:class "shopping-list-column" :xs 3}
                (get item :img_txt)
            ]
            [ui/grid {:class "shopping-list-column" :xs 2}
                (get (get item :type) :id)
            ]
            [ui/grid {:class "shopping-list-column" :xs 2}
                (str/join "" ["$" (get (get item :type) :cost)])
            ]
            [ui/grid {:class "shopping-list-column" :xs 2}
                [AddToCart/AddToCart true (get item :item_number) (get item :types)]
                [RemoveFromCart/RemoveFromCart true (get item :item_number) (get item :types)]
            ]
        ]))
        (if (= 0 (count items))
            [:div.empty-cart "You have nothing in your cart!"]
            (if loading
                [:div.empty-cart
                    [Spinners/PacManLoader {:loading true}]
                ]
                (if paid
                    [:div.empty-cart "Thanks for your purchase!"]
                    [ui/grid {:container true :class "checkout" :alignItems "center" :direction "column"}
                        [ui/grid {:item true :xs 12 :md 6 :lg 6}
                            [:h2 "Checkout"]
                        ]
                        [ui/grid {:item true :xs 12 :md 6 :lg 6}
                            [ui/grid {:container true}
                                [ui/grid {:item true :xs 12}
                                    [ui/grid {:container true :class "shopping-list-title"}
                                        [ui/grid {:item true :class "shopping-list-column" :xs 2} "Image"]
                                        [ui/grid {:item true :class "shopping-list-column" :xs 1} "Qty"]
                                        [ui/grid {:item true :class "shopping-list-column" :xs 3} "Description"]
                                        [ui/grid {:item true :class "shopping-list-column" :xs 2} "Finish"]
                                        [ui/grid {:item true :class "shopping-list-column" :xs 2} "Price"]
                                        [ui/grid {:item true :class "shopping-list-column" :xs 2} "Actions"]
                                    ]
                                ]
                                [ui/grid {:item true :xs 12}
                                    (items)
                                    [ui/grid {:container true :class "shopping-list-item" :key "a"}
                                        [ui/grid {:item true :class "shopping-list-column" :xs 2} "Image"]
                                        [ui/grid {:item true :class "shopping-list-column" :xs 1} "Qty"]
                                        [ui/grid {:item true :class "shopping-list-column" :xs 3} "Description"]
                                        [ui/grid {:item true :class "shopping-list-column" :xs 2} "Finish"]
                                        [ui/grid {:item true :class "shopping-list-column" :xs 2} "Price"]
                                        [ui/grid {:item true :class "shopping-list-column" :xs 2} "Actions"]
                                    ]
                                ]
                                [ui/grid {:item true :class "total" :xs 12}
                                    (str/join "" ["Total (incl. GST): $" total])
                                ]
                            ]
                        ]
                        [ui/grid {:item true :class "total" :xs 12 :md 6 :lg 6}
                            [PostageCalculator/PostageCalculator]
                        ]
                        [ui/grid {:item true :class "total" :xs 12 :md 6 :lg 6}
                            (if postage
                                [:div];(StripeCheckout/StripeCheckout {:token PayNow :stripeKey "pk_live_PrBOTAQyZjAJScTTYykAuOz0" :amount (* total 100) :currency "AUD" :shippingAddress shippingAddress :billingAddress billingAddress})
                                [:div]
                            )
                            [:h2 "Checkout"]
                        ]
                    ]
                )
            )
        )
)
