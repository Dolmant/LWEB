import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Menu, {MenuItem} from 'material-ui/Menu';
import {actionCreators} from './CartManagementActions';

class CartManagement extends React.Component {
    state = {
        anchorEl: null,
    };

    handleClick = (event) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

	render() {
        const { anchorEl } = this.state;
        const items = this.props.types.map((type) => {
            return (
                <MenuItem onClick={() => {this.props.addToCart(this.props.id, type); this.handleClose();}}>{type.desc}</MenuItem>
            );
        });
		return (
            <div>
                <Button
                    variant="raised"
                    color="primary"
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    {'Add to cart'}
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    {items}
                </Menu>
                <Button variant="raised" color="secondary" onClick={() => this.props.removeFromCart(this.props.id)}>
                    {'Remove from cart'}
                </Button>
            </div>
		);
	}
}

CartManagement.propTypes = {
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
)(CartManagement);
