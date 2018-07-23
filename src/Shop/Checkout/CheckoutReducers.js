// @flow
import {types} from './CheckoutActions';
import {types as cartManagementTypes} from './../CartManagement/CartManagementActions';

const paidIS = false;

export function PaidReducer(state = paidIS, action) {
    if (action.type === types.PAY_NOW_REPLY) {
        return true;
    }
    if (action.type === cartManagementTypes.ADD_TO_CART) {
        return false;
    }
    return state;
}

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
        paid: PaidReducer(state.paid, action),
        checkoutResult: CheckoutReducer(state.checkoutResult, action),
        loading: LoadingReducer(state.loading, action),
    };
}
