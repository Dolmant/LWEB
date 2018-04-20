// @flow
import fetch from 'isomorphic-fetch';
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

        const data = Object.assign(token, {amount: store.total*100, currency: "AUD", description: "Leotide Art"})
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
            $.ajax({
				url: 'https://us-central1-lweb-176107.cloudfunctions.net/sendLWEBMail',
				type: 'POST',
				data: JSON.stringify({
                    'Contact Details': '123',
                    Message: `Postage details ${store.total} etc ${store.shoppingCart} etc \n etc`,
                }),
				beforeSend: () => {
					const num = 0;
				},
				success: (data) => {
					const num = 0;
				},
            });
            // Success
        })
        .catch((err) => {
            //toastr
            dispatch({
                type: types.PAY_NOW_REPLY,
            });
        })
        return true;
    },
};
