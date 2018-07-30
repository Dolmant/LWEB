// @flow
import {types} from "./PostageCalculatorActions"

const loadingIS = false

export function LoadingReducer(state: bool = loadingIS, action: any) {
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
}

const postageIS = {
    type: 0,
    cost: 0,
}

export function PostageReducer(state: any = postageIS, action: any, shoppingCart: any) {
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
}

const combinedInitialState = {}

export default function CombinedPostageCalculatorReducer(state: typeof combinedInitialState = combinedInitialState, action: any, shoppingCart: any) {
    return {
        postageResult: PostageReducer(state.postageResult, action, shoppingCart),
        loading: LoadingReducer(state.loading, action),
    }
}