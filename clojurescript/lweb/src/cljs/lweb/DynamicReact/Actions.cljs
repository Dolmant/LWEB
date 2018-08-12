

(def actionCreators {
    :updateCategory (fn [category] {
        dispatch({type: (types :UPDATE_CATEGORY), payload: category})
        dispatch({type: (types :SELECT_PAGE), payload: "portfolio"})
    }),
    :selectPage (page: string) => (dispatch: any) => {
        dispatch({type: types.UPDATE_CATEGORY, payload: ""})
        return dispatch({type: (types :SELECT_PAGE), payload: page})
    },
    :updateIntroState (statebool: bool) => ({type: types.UPDATE_INTROSTATE, payload: statebool}),
    :toggleTouchmenu () => ({type: types.TOGGLE_TOUCHMENU}),
    :toggleSidebar () => ({type: types.TOGGLE_SIDEBAR}),
    :updateOverlayImage (index: number) => ({type: types.UPDATE_OVERLAY_IMAGE, payload: index}),
    :navOverlayImage (direction: any) => ({type: types.NAV_OVERLAY_IMAGE, payload: direction}),
    :toggleOverlay (state: any, image: any) => ({type: types.TOGGLE_OVERLAY, payload: {state, image}}),
})
