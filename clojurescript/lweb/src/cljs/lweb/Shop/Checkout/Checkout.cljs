// @flow
import {connect} from "react-redux"
import React from "react"
import StripeCheckout from "react-stripe-checkout"
import Grid from "@material-ui/core/Grid"
import {PacmanLoader} from "react-spinners"
import {actionCreators} from "./CheckoutActions"
import {actionCreators as cartManagementActionCreators} from "./../CartManagement/CartManagementActions"
import AddToCart from "./../CartManagement/AddToCart"
import RemoveFromCart from "./../CartManagement/RemoveFromCart"
import PostageCalculator from "../PostageCalculator/PostageCalculator"

(ns lweb.Shop.Checkout.Checkout
  (:require [rum.core :as rum]
            [lweb.Shop.CartManagement.CartManagementActions :as CartActions]
            [lweb.Shop.CartManagement.AddToCart :as AddToCart]
            [lweb.Shop.CartManagement.RemoveFromCart :as RemoveFromCart]
            [lweb.Shop.PostageCalculator.PostageCalculator :as PostageCalculator]
            [cljs-react-material-ui.core :as ui]))


(rum/defc RemoveFromCart [id type mini removeFromCart]
    [:div {:style "display: inline-block;"}
        [ui/Button {
                    mini: mini
                    :variant (if mini "fab" "raised")
                    color "secondary"
                    :on-click (fn []
                        toastr.success ("Success", "Item removed from cart")
                        Actions.actionCreators.removeFromCart (this.props.id, this.props.type)
                    )
        } (if mini [ic/remove-icon "Remove from cart"])]
    ]
)


type Props = {
    setName: (string) => void,
    setEmail: (string) => void,
    setAddress: (string) => void,
    payNow: (string) => void,
    emptyCart: (string) => void,
    shoppingCart: any,
    total: number,
    loading: bool,
    paid: bool,
    postage: string,
};

class Checkout extends React.Component<Props> {
    render() {
        const items = this.props.shoppingCart.map((item, index) => (
            <Grid container key={index} alignItems="center" className="shopping-list-item">
                <Grid item className="shopping-list-column" xs={2}>
                    <img alt="Not found" src={item.img_src} />
                </Grid>
                <Grid item className="shopping-list-column" xs={1}>{item.count}</Grid>
                <Grid item className="shopping-list-column" xs={3}>{item.img_txt}</Grid>
                <Grid item className="shopping-list-column" xs={2}>{item.type.id}</Grid>
                <Grid item className="shopping-list-column" xs={2}>{"$"}{item.type.cost}</Grid>
                <Grid item className="shopping-list-column" xs={2}><AddToCart id={item.item_number} types={[item.type]} mini /><RemoveFromCart id={item.item_number} type={item.type} mini /></Grid>
            </Grid>
            ))
        if (items.length === 0) {
            return (
                <div className="empty-cart">
                    {"You have nothing in your cart!"}
                </div>
            )
        }
        if (this.props.loading) {
            return (
                <div className="empty-cart">
                    <PacmanLoader loading />
                </div>
            )
        }
        if (this.props.paid) {
            return (
                <div className="empty-cart">
                    {"Thanks for your purchase!"}
                </div>
            )
        }
        return (
            <Grid container className="checkout" alignItems="center" direction="column">
                <Grid item xs={12} md={6} lg={6}>
                    <h2>{"Checkout"}</h2>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Grid container className="shopping-list-title">
                                <Grid item className="shopping-list-column" xs={2}>{"Image"}</Grid>
                                <Grid item className="shopping-list-column" xs={1}>{"Qty"}</Grid>
                                <Grid item className="shopping-list-column" xs={3}>{"Description"}</Grid>
                                <Grid item className="shopping-list-column" xs={2}>{"Finish"}</Grid>
                                <Grid item className="shopping-list-column" xs={2}>{"Price"}</Grid>
                                <Grid item className="shopping-list-column" xs={2}>{"Actions"}</Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            {items}
                            <Grid container key="a" className="shopping-list-item">
                                <Grid item className="shopping-list-column" xs={2}>{}</Grid>
                                <Grid item className="shopping-list-column" xs={1}>{}</Grid>
                                <Grid item className="shopping-list-column" xs={3}>{"Postage"}</Grid>
                                <Grid item className="shopping-list-column" xs={2}>{}</Grid>
                                <Grid item className="shopping-list-column" xs={2}>{"$"}{this.props.postage}</Grid>
                                <Grid item className="shopping-list-column" xs={2}>{""}</Grid>
                            </Grid>
                        </Grid>
                        <Grid className="total" item xs={12}>
                            {"Total (incl. GST): $"}{this.props.total}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className="total" item xs={12} md={6} lg={6}>
                    <PostageCalculator />
                </Grid>
                <Grid className="total" item xs={12} md={6} lg={6}>
                    {this.props.postage ?
                        <StripeCheckout
                            token={this.props.payNow}
                            stripeKey="pk_live_PrBOTAQyZjAJScTTYykAuOz0"
                            amount={this.props.total * 100}
                            currency={"AUD"}
                            shippingAddress
                            billingAddress
                        />
                        : null}
                </Grid>
            </Grid>)
    }
}

const mapStateToProps = state => ({
    shoppingCart: state.shoppingCart,
    total: state.total,
    loading: state.checkout.loading,
    paid: state.checkout.paid,
    postage: state.postageCalculator.postageResult.cost,
})

const mapDispatchToProps = {
    ...actionCreators,
    ...cartManagementActionCreators,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Checkout)
