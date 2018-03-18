export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export function updateCategory(category) {
    return dispatch => {
        dispatch({type: SELECT_PAGE, payload: 'portfolio'})
        return dispatch({ type: UPDATE_CATEGORY, payload: category });
    };
    return ;
}

export const UPDATE_INTROSTATE = 'UPDATE_INTROSTATE';
export function updateIntroState(statebool) {
    return { type: UPDATE_INTROSTATE, payload: statebool };
}

export const TOGGLE_TOUCHMENU = 'TOGGLE_TOUCHMENU';
export function toggleTouchmenu() {
    return { type: TOGGLE_TOUCHMENU };
}

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export function toggleSidebar() {
    return { type: TOGGLE_SIDEBAR };
}

export const UPDATE_OVERLAY_IMAGE = 'UPDATE_OVERLAY_IMAGE';
export function updateOverlayImage(index) {
    return { type: UPDATE_OVERLAY_IMAGE, payload: index };
}

export const TOGGLE_OVERLAY = 'TOGGLE_OVERLAY';
export function toggleOverlay(state, image) {
    return { type: TOGGLE_OVERLAY, payload: {state, image }};
}

export const NAV_OVERLAY_IMAGE = 'NAV_OVERLAY_IMAGE';
export function navOverlayImage(direction) {
    return { type: NAV_OVERLAY_IMAGE, payload: direction };
}

export const SELECT_PAGE = 'SELECT_PAGE';
export function selectPage(page) {
    return dispatch => {
        dispatch({type: UPDATE_CATEGORY, payload: ''});
        return dispatch({type: SELECT_PAGE, payload: page});
    };
}
