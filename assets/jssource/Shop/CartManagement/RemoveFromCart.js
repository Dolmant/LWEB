import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import RemoveIcon from '@material-ui/icons/Remove';
import {toastr} from 'react-redux-toastr';
import {actionCreators} from './CartManagementActions';

class RemoveFromCart extends React.Component {
	render() {
		return (
            <div style={{display: 'inline-block'}} >
                <Button
                    mini={this.props.mini}
                    variant={this.props.mini ? 'fab' : 'raised'}
                    color="secondary"
                    onClick={() => {
                        toastr.success('Success', 'Item removed from cart');
                        this.props.removeFromCart(this.props.id, this.props.type);
                    }}
                >
                    {this.props.mini ? <RemoveIcon /> :'Remove from cart'}
                </Button>
            </div>
		);
	}
}

RemoveFromCart.propTypes = {
	id: PropTypes.number.isRequired,
	types: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
    ...actionCreators,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(RemoveFromCart);
