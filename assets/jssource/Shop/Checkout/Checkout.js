import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import {actionCreators} from './CheckoutActions';
import {shoppingCartActionCreators} from './../ShoppingCart/ShoppingCartActions';

class Checkout extends React.Component {
	render() {
		return (
            <div>
            </div>
		);
	}
}

Checkout.propTypes = {
	shoppingCart: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
	shoppingCart: state.shoppingCart,
});

const mapDispatchToProps = dispatch => ({
	setName: (name) => {
		dispatch(actionCreators.setName(name));
	},
	setEmail: (email) => {
		dispatch(actionCreators.setEmail(email));
	},
	setAddress: (address) => {
		dispatch(actionCreators.setAddress(address));
	},
	payNow: () => {
		dispatch(actionCreators.payNow());
    },
    addToCart: (item) => {
		dispatch(shoppingCartActionCreators.addToCart(item));
	},
	removeFromCart: (item) => {
		dispatch(shoppingCartActionCreators.removeFromCart(item));
	},
	emptyCart: () => {
		dispatch(shoppingCartActionCreators.emptyCart());
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Checkout);
