(ns lweb.DynamicReact.IntroHeader
  (:require [rum.core :as rum]
            [lweb.DynamicReact.State :as DynamicReactState]
            [lweb.DynamicReact.NavMenu :as NavMenu]
            [lweb.Shop.CartManagement.State :as CartManagementState]
            [lweb.wrappers.ui :as ui]
            [lweb.wrappers.ic :as ic]))

(rum/defc IntroHeader < rum/reactive []
  (def shoppingCart ((rum/react CartManagementState/State) :shoppingCart))
  (def category ((rum/react DynamicReactState/State) :category))
  [:div
   (ui/appBar {:className "appbar"}
              (ui/toolbar {}
                          [[:h1 {:key 1}
                            [:img {:on-click (fn [] (DynamicReactState/SetPage "home")) :src "./assets/images/LEOTIDErev.png" :alt "LeoTide"}]]
                           (NavMenu/NavMenu)
                           [:div.cursor {:key 3 :on-click (fn [] (DynamicReactState/SetCategory :CHECKOUT))}
                            [:div.total-count (count shoppingCart)]
                            (ic/shoppingCartIcon)]]))])
