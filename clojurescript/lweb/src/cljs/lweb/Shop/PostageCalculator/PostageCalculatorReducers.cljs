(ns lweb.Shop.Checkout.CheckoutReducers
  (:require [rum.core :as rum]
            [lweb.Shop.CartManagement.CartManagementActions :as CartActions]
            [lweb.Shop.Checkout.CheckoutActions :as CheckoutActions]
            [cljs-react-material-ui.core :as ui]))

(defn LoadingReducer [state, action]
    if (action.type === types.POSTAGE_REQUEST) {
        return true
    }
    if (action.type === types.POSTAGE_REPLY) {
        return false
    }
    if (action.type === types.POSTAGE_ERROR) {
        return false
    }
    return state
)

(defn PostageReducer [state, action, shoppingCart]
    const postagePrice = {
        "0": 0,
        "1": 20,
        "2": 40,
    }
    let cost
    let mini = true
    shoppingCart.forEach((item) => {
        if (item.type.id !== "sticker" && item.type.id !== "pin" && item.type.id !== "patch") {
            mini = false
        }
    })
    if (action.type === types.POSTAGE_REPLY) {
        if (mini) {
            cost = postagePrice[`${action.payload.type}`] / 2 // postage
        } else {
            cost = postagePrice[`${action.payload.type}`] // postage
        }
        return {
            type: action.payload.type,
            cost,
        }
    }
    if (action.type === types.POSTAGE_ERROR) {
        return action.payload
    }
    if (mini) {
        cost = postagePrice[`${state.type}`] / 2 // postage
    } else {
        cost = postagePrice[`${state.type}`] // postage
    }
    return {
        type: state.type,
        cost,
    }
)

(defn CombinedPostageCalculatorReducer [state, action, shoppingCart]
    {
        postageResult: PostageReducer(state.postageResult, action, shoppingCart),
        loading: LoadingReducer(state.loading, action),
    }
)
