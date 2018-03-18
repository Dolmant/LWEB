// @flow
export const types = {
    POSTAGE_REQUEST: 'POSTAGE_REQUEST',
    POSTAGE_REPLY: 'POSTAGE_REPLY',
    POSTAGE_ERROR: 'POSTAGE_ERROR',
    SET_COUNTRY: 'SET_COUNTRY',
    SET_POSTCODE: 'SET_POSTCODE',
};

export const actionCreators = {
    setCountry: (country) => ({
        type: types.SET_COUNTRY,
        payload: country,
    }),
    setPostcode: (postcode) => ({
        type: types.SET_POSTCODE,
        payload: postcode,
    }),
    postage: () => (dispatch, getState) => {
        const state = getState();
        return true;
    },
};
