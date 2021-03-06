(ns lweb.Shop.CartManagement.Checkout
  (:require [rum.core :as rum]
            [lweb.rum-adaptor :refer (adapt-rum-class)]
            [lweb.Shop.CartManagement.State :as CartManagementState]
            [lweb.Shop.CartManagement.AddToCart :as AddToCart]
            [lweb.Shop.CartManagement.RemoveFromCart :as RemoveFromCart]
            [lweb.Shop.Postage.PostageCalculator :as PostageCalculator]
            [clojure.string :as str]
            ; ["react-spinners/PacmanLoader" :as Pacman]
            ["react-stripe-checkout" :as Stripe]
            [lweb.Shop.Postage.State :as PostageState]
            [lweb.wrappers.ui :as ui]))

(def StripeCheckout (adapt-rum-class Stripe/default))
; (def PacmanLoader (adapt-rum-class Pacman))

(rum/defc Checkout < rum/reactive []
  (def shoppingCart ((rum/react CartManagementState/State) :shoppingCart))
  (def total ((rum/react CartManagementState/State) :total))
  (def loading ((rum/react CartManagementState/State) :loading))
  (def paid ((rum/react CartManagementState/State) :paid))
  (def postage ((rum/react PostageState/State) :cost))
  (def items (map-indexed (fn [index item]
                            (ui/grid {:container true :key index :alignItems "center" :className "shopping-list-item"}
                                     (ui/grid {:className "shopping-list-column" :item true :xs 2}
                                              [:img {:alt "Not found" :src (item :img_src)}])
                                     (ui/grid {:className "shopping-list-column" :item true :xs 1}
                                              (item :count))
                                     (ui/grid {:className "shopping-list-column" :item true :xs 3}
                                              (item :img_txt))
                                     (ui/grid {:className "shopping-list-column" :item true :xs 2}
                                              ((item :type) :id))
                                     (ui/grid {:className "shopping-list-column" :item true :xs 2}
                                              (str/join "" ["$" ((item :type) :cost)]))
                                     (ui/grid {:className "shopping-list-column" :item true :xs 2}
                                              (AddToCart/AddToCart true (item :item_number) (item :types))
                                              (RemoveFromCart/RemoveFromCart true (item :item_number) (item :types))))) shoppingCart))
  (if (= 0 (count items))
    [:div
     (ui/grid {:item true :xs 12 :md 12 :lg 12}
              [:h2 "Checkout"])
     (ui/grid {:item true :xs 12 :md 12 :lg 12}
              [:div.empty-cart "You have nothing in your cart!"])]
    (if loading
      [:div.empty-cart
      ;  (PacmanLoader {:loading true})
       "Loading..."
       ]
      (if paid
        [:div.empty-cart "Thanks for your purchase!"]
        (ui/grid {:container true :className "checkout" :alignItems "center" :direction "column"}
                 (ui/grid {:item true :xs 12 :md 6 :lg 6}
                          [:h2 "Checkout"])
                 (ui/grid {:item true :xs 12 :md 6 :lg 6}
                          (ui/grid {:container true}
                                   (ui/grid {:item true :xs 12}
                                            (ui/grid {:container true :className "shopping-list-title"}
                                                     (ui/grid {:item true :className "shopping-list-column" :xs 2} "Image")
                                                     (ui/grid {:item true :className "shopping-list-column" :xs 1} "Qty")
                                                     (ui/grid {:item true :className "shopping-list-column" :xs 3} "Description")
                                                     (ui/grid {:item true :className "shopping-list-column" :xs 2} "Finish")
                                                     (ui/grid {:item true :className "shopping-list-column" :xs 2} "Price")
                                                     (ui/grid {:item true :className "shopping-list-column" :xs 2} "Actions")))
                                   (ui/grid {:item true :xs 12}
                                            items
                                            (ui/grid {:container true :className "shopping-list-item" :key "a"}
                                                     (ui/grid {:item true :className "shopping-list-column" :xs 2} "Image")
                                                     (ui/grid {:item true :className "shopping-list-column" :xs 1} "Qty")
                                                     (ui/grid {:item true :className "shopping-list-column" :xs 3} "Description")
                                                     (ui/grid {:item true :className "shopping-list-column" :xs 2} "Finish")
                                                     (ui/grid {:item true :className "shopping-list-column" :xs 2} "Price")
                                                     (ui/grid {:item true :className "shopping-list-column" :xs 2} "Actions")))
                                   (ui/grid {:item true :className "total" :xs 12}
                                            (str/join "" ["Total (incl. GST): $" total]))))
                 (ui/grid {:item true :className "total" :xs 12 :md 6 :lg 6}
                          (PostageCalculator/PostageCalculator))
                 (ui/grid {:item true :className "total" :xs 12 :md 6 :lg 6}
                          [:div {:className "test"} (if (not= 0 postage)
                                                      (StripeCheckout {:token CartManagementState/PayNow :stripeKey "pk_live_PrBOTAQyZjAJScTTYykAuOz0" :amount (* total 100) :currency "AUD" :shippingAddress true :billingAddress true}))]))))))
