// @flow

export const types = {
    UPDATE_CATEGORY: "UPDATE_CATEGORY",
    UPDATE_INTROSTATE: "UPDATE_INTROSTATE",
    TOGGLE_TOUCHMENU: "TOGGLE_TOUCHMENU",
    TOGGLE_SIDEBAR: "TOGGLE_SIDEBAR",
    UPDATE_OVERLAY_IMAGE: "UPDATE_OVERLAY_IMAGE",
    TOGGLE_OVERLAY: "TOGGLE_OVERLAY",
    NAV_OVERLAY_IMAGE: "NAV_OVERLAY_IMAGE",
    SELECT_PAGE: "SELECT_PAGE",
}

export const actionCreators = {
    updateCategory: (category: string) => (dispatch: any) => {
        dispatch({type: types.UPDATE_CATEGORY, payload: category})
        dispatch({type: types.SELECT_PAGE, payload: "portfolio"})
    },
    updateIntroState: (statebool: bool) => ({type: types.UPDATE_INTROSTATE, payload: statebool}),
    toggleTouchmenu: () => ({type: types.TOGGLE_TOUCHMENU}),
    toggleSidebar: () => ({type: types.TOGGLE_SIDEBAR}),
    updateOverlayImage: (index: number) => ({type: types.UPDATE_OVERLAY_IMAGE, payload: index}),
    navOverlayImage: (direction: any) => ({type: types.NAV_OVERLAY_IMAGE, payload: direction}),
    toggleOverlay: (state: any, image: any) => ({type: types.TOGGLE_OVERLAY, payload: {state, image}}),
    selectPage: (page: string) => (dispatch: any) => {
        dispatch({type: types.UPDATE_CATEGORY, payload: ""})
        return dispatch({type: types.SELECT_PAGE, payload: page})
    },
}
