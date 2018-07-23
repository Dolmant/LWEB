// @flow
import fetch from 'isomorphic-fetch';
import {toastr} from 'react-redux-toastr';
import {types as cartManagementTypes} from './../CartManagement/CartManagementActions';

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
    payNow: (token) => (dispatch, getState) => {
        const store = getState();

        const data = Object.assign(token, {amount: store.total*100, currency: "AUD", description: "Leotide Art", shoppingCart: store.shoppingCart})
        dispatch({
            type: types.PAY_NOW_REQUEST,
        });

        fetch('https://us-central1-lweb-176107.cloudfunctions.net/try_payment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then((output) => {
            dispatch({
                type: cartManagementTypes.EMPTY_CART,
            });
            dispatch({
                type: types.PAY_NOW_REPLY,
            });
            toastr.success('Success!', 'Thanks for your order!');
        })
        .catch((err) => {
            //toastr
            dispatch({
                type: types.PAY_NOW_REPLY,
            });
            console.log(err);
            toastr.error('Payment failed!', 'The gateway declined your payment, please try again!');
        })
        return true;
    },
};
