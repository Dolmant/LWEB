(ns lweb.Shop.Checkout.CheckoutReducers
  (:require [rum.core :as rum]
            [lweb.Shop.CartManagement.CartManagementActions :as CartActions]
            [lweb.Shop.Checkout.CheckoutActions :as CheckoutActions]
            [cljs-react-material-ui.core :as ui]))


(defn PaidReducer [state, action] {
    if (action.type === types.PAY_NOW_REPLY) {
        return true
    }
    if (action.type === cartManagementTypes.ADD_TO_CART) {
        return false
    }
    return state
})


(defn LoadingReducer [state, action] {
    if (action.type === types.PAY_NOW_REQUEST) {
        return true
    }
    if (action.type === types.PAY_NOW_REPLY) {
        return false
    }
    if (action.type === types.PAY_NOW_ERROR) {
        return false
    }
    return state
})


(defn CheckoutReducer [state action] {
    if (action.type === types.PAY_NOW_REPLY) {
        return action.payload
    }
    if (action.type === types.PAY_NOW_ERROR) {
        return action.payload
    }
    return state
})

(defn CombinedCheckoutReducer [state, action] {
    {
        :paid (PaidReducer state.paid, action),
        :checkoutResult (CheckoutReducer state.checkoutResult, action),
        :loading (LoadingReducer state.loading, action),
    }
})
