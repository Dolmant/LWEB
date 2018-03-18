import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import {selectPage} from './../../DynamicReact/Actions'

class ShoppingCart extends React.Component {
	render() {
		return (
            <div>
                <i className="fa fa-shopping-cart" onClick={() => this.props.selectPage('checkout')} />
            </div>
		);
	}
}

ShoppingCart.propTypes = {
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
	selectPage: (page) => {
		dispatch(selectPage(page));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ShoppingCart);
