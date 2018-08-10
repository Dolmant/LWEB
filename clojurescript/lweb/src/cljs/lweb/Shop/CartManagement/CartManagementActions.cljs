(ns lweb.Shop.CartManagement.CartManagementActions
    (:require [rum.core :as rum]
    [cljs-react-material-ui.core :as ui]))

(def types {
    :ADD_TO_CART "ADD_TO_CART",
    :REMOVE_FROM_CART "REMOVE_FROM_CART",
    :EMPTY_CART "EMPTY_CART",
})

(def actionCreators {
    :addToCart (fn [id, type] {
        :type: types.ADD_TO_CART,
        :payload: {:id id, :type type},
    }),
    :removeFromCart (fn [id, type] {
        :type: types.REMOVE_FROM_CART,
        :payload: {id, type},
    }),
    :emptyCart (fn [] {
        :type: types.EMPTY_CART,
        :payload: {},
    }),
})
