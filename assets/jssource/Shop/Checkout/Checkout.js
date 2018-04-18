import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';
import Grid from 'material-ui/Grid';
import {actionCreators} from './CheckoutActions';
import {actionCreators as cartManagementActionCreators} from './../CartManagement/CartManagementActions';
import AddToCart from './../CartManagement/AddToCart'
import RemoveFromCart from './../CartManagement/RemoveFromCart'

class Checkout extends React.Component {
	render() {
        let total = 0;
        total += 20; //(postage)
        const items = this.props.shoppingCart.map((item, index) => {
            total += item.type.cost;
            return (
                <Grid container key={index} className="shopping-list-item">
                    <Grid item xs={2}><img src={item.img_src} /></Grid>
                    <Grid item xs={1}>{item.count}</Grid>
                    <Grid item xs={3}>{item.img_txt}</Grid>
                    <Grid item xs={2}>{item.type.id}</Grid>
                    <Grid item xs={2}>{'$'}{item.type.cost}</Grid>
                    <Grid item xs={2}><AddToCart id={item.item_number} types={[item.type]} mini /><RemoveFromCart id={item.item_number} type={item.type} mini /></Grid>
                </Grid>
            )
        });
        if (items.length === 0) {
            return (
                <div className="empty-cart">
                    {'You have nothing in your cart!'}
                </div>
            );
        }
        return (
            <Grid container direction="column">
                <Grid item xs={12} md={6} lg={6}>
                    <h2>{'Checkout'}</h2>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Grid container className="shopping-list-title">
                                <Grid item xs={2}>{''}</Grid>
                                <Grid item xs={1}>{'Qty'}</Grid>
                                <Grid item xs={3}>{'Description'}</Grid>
                                <Grid item xs={2}>{'Finish'}</Grid>
                                <Grid item xs={2}>{'Price'}</Grid>
                                <Grid item xs={2}>{'Actions'}</Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container key="a" className="shopping-list-item">
                                <Grid item xs={2}>{}</Grid>
                                <Grid item xs={1}>{1}</Grid>
                                <Grid item xs={3}>{"Postage"}</Grid>
                                <Grid item xs={2}>{"Standard"}</Grid>
                                <Grid item xs={2}>{'$'}{20}</Grid>
                                <Grid item xs={2}>{''}</Grid>
                            </Grid>
                            {items}
                        </Grid>
                        <Grid className="total" item xs={12}>
                            {'Total (incl. GST): $'}{total}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className="total" item xs={12} md={6} lg={6}>
                    <StripeCheckout
                        token={this.props.payNow}
                        stripeKey="pk_test_9PGhHf1uBmM6KT5aN8rgPNpM"
                        amount={total*100}
                        currency={'AUD'}
                        shippingAddress
                        billingAddress={false}
                    />
                </Grid>
            </Grid>);
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
		dispatch(cartManagementActionCreators.addToCart(item));
	},
	removeFromCart: (item) => {
		dispatch(cartManagementActionCreators.removeFromCart(item));
	},
	emptyCart: () => {
		dispatch(cartManagementActionCreators.emptyCart());
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Checkout);
