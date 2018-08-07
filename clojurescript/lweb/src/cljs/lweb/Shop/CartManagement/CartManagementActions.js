// @flow
export const types = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    EMPTY_CART: "EMPTY_CART",
}

export const actionCreators = {
    addToCart: (id: string, type: any) => ({
        type: types.ADD_TO_CART,
        payload: {id, type},
    }),
    removeFromCart: (id: string, type: any) => ({
        type: types.REMOVE_FROM_CART,
        payload: {id, type},
    }),
    emptyCart: () => ({
        type: types.EMPTY_CART,
        payload: {},
    }),
}
