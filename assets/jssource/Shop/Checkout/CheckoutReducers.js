// @flow
import {types} from './CheckoutActions';

const loadingIS = false;

export function LoadingReducer(state = loadingIS, action) {
    if (action.type === types.PAY_NOW_REQUEST) {
        return true;
    }
    if (action.type === types.PAY_NOW_REPLY) {
        return false;
    }
    if (action.type === types.PAY_NOW_ERROR) {
        return false;
    }
    return state;
}

const checkoutIS = {};

export function CheckoutReducer(state = checkoutIS, action) {
    if (action.type === types.PAY_NOW_REPLY) {
        return action.payload;
    }
    if (action.type === types.PAY_NOW_ERROR) {
        return action.payload;
    }
    return state;
}

const combinedInitialState = {};

export default function CombinedCheckoutReducer(state: typeof combinedInitialState = combinedInitialState, action: actionType) {
    return {
        checkoutResult: CheckoutReducer(state.checkoutResult, action),
        loading: LoadingReducer(state.loading, action),
    };
}
