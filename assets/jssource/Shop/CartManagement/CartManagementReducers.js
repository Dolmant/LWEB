import {types} from './CartManagementActions';
import {getImageById} from './../../consts';

const cartIS = [];

export default function CartManagementReducer(state = cartIS, action) {
    if (action.type === types.ADD_TO_CART) {
        const item = getImageById(action.payload.id);

        const present = state.findIndex((item) => item.item_number === action.payload.id && item.type.id === action.payload.type.id);
        const newState = state.slice()
        if (present != -1) {
            newState[present].count += 1;
            return newState;
        } else {
            item.count = 1;
            item.type = action.payload.type;
            newState.push(item);
            return newState;
        }
    }
    if (action.type === types.REMOVE_FROM_CART) {
        const present = state.findIndex((item) => item.item_number === action.payload.id && item.type.id === action.payload.type.id);
        const newState = state.slice()
        if (present != -1) {
            if (newState[present].count > 1) {
                newState[present].count -= 1;
                return newState;
            } else {
                newState.splice(present, 1);
                return newState;
            }
        } else {
            return state;
        }
    }
    if (action.type === types.EMPTY_CART) {
        return [];
    }
    return state;
}
