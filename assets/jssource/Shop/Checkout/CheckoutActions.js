// @flow
export const types = {
    SET_NAME: 'SET_NAME',
    SET_EMAIL: 'SET_EMAIL',
    SET_ADDRESS: 'SET_ADDRESS',
    PAY_NOW_REQUEST: 'PAY_NOW_REQUEST',
    PAY_NOW_REPLY: 'PAY_NOW_REPLY',
    PAY_NOW_ERROR: 'PAY_NOW_ERROR',
};

export const actionCreators = {
    setName: (name) => ({
        type: types.SET_NAME,
        payload: name,
    }),
    setEmail: (email) => ({
        type: types.SET_EMAIL,
        payload: email,
    }),
    setAddress: (address) => ({
        type: types.SET_ADDRESS,
        payload: address,
    }),
    payNow: () => (dispatch, getState) => {
        const store = getState();
        return true;
    },
};
