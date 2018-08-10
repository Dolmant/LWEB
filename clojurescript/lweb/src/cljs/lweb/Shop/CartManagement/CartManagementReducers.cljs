(ns lweb.Shop.CartManagement.CartManagementReducers
    (:require [rum.core :as rum]
    [lweb.Shop.CartManagement.CartManagementActions :as Actions]
    [lweb.consts :as consts]
    [cljs-react-material-ui.core :as ui]))


(defn CartManagementReducer [state, action] 
    if (action.type === Actions/types.ADD_TO_CART) {
        const image = Object.assign({}, consts/getImageById(action.payload.id))

        const present = state.findIndex(item => item.item_number === action.payload.id && item.type.id === action.payload.type.id)
        const newState = state.slice()
        if (present !== -1) {
            newState[present].count += 1
            return newState
        }
        image.count = 1
        image.type = action.payload.type
        newState.push(image)
        return newState
    }
    if (action.type === Actions/types.REMOVE_FROM_CART) {
        const present = state.findIndex(item => item.item_number === action.payload.id && item.type.id === action.payload.type.id)
        const newState = state.slice()
        if (present !== -1) {
            if (newState[present].count > 1) {
                newState[present].count -= 1
                return newState
            }
            newState.splice(present, 1)
            return newState
        }
        return state
    }
    if (action.type === Actions/types.EMPTY_CART) {
        return []
    }
    return state
)
