(ns lweb.Shop.CheckoutState
  (:require [rum.core :as rum]
            [lweb.Shop.CartManagementState :as CartManagementState]
            [cljs-react-material-ui.core :as ui]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))


(defonce state
    (atom {:paid false :checkoutResult "0" :loading false}))

(defn SetLoading [loading]
    (reset! state
        (update-in @state [:loading ] loading)
    )
)

(defn SetPaid [paid]
    (reset! state
        (update-in @state [:paid ] paid)
    )
)

(defn PayNow [token] 
    (SetLoading true)
    (go (let [response (<! (http/post "https://us-central1-lweb-176107.cloudfunctions.net/try_payment"
                                    {:with-credentials? false
                                    :json-params (merge token {:amount (* 100 store.total) :currency "AUD" :description "Leotide Art" :shoppingCart store.shoppingCart})}))]
        (CartManagementState/EmptyCart)
        (SetPaid true)
        ;(toastr)
        (SetLoading false)
        (reset! state (update-in @state [:checkoutResult] response))
    ))
)
