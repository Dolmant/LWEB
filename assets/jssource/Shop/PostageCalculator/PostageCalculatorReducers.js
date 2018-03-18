// @flow
import {types} from './PostageCalculatorActions';

const loadingIS = false;

export function LoadingReducer(state = loadingIS, action) {
    if (action.type === types.POSTAGE_REQUEST) {
        return true;
    }
    if (action.type === types.POSTAGE_REPLY) {
        return false;
    }
    if (action.type === types.POSTAGE_ERROR) {
        return false;
    }
    return state;
}

const postageIS = {};

export function PostageReducer(state = postageIS, action) {
    if (action.type === types.POSTAGE_REPLY) {
        return action.payload;
    }
    if (action.type === types.POSTAGE_ERROR) {
        return action.payload;
    }
    return state;
}

const combinedInitialState = {};

export default function CombinedPostageCalculatorReducer(state: typeof combinedInitialState = combinedInitialState, action: actionType) {
    return {
        postageResult: PostageReducer(state.postageResult, action),
        loading: LoadingReducer(state.loading, action),
    };
}
