import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';
import Menu, {MenuItem} from 'material-ui/Menu';
import {actionCreators} from './CartManagementActions';

class AddToCart extends React.Component {
    state = {
        anchorEl: null,
    };

    handleClick = (event) => {
        if (this.props.types.length === 1) {
            this.props.addToCart(this.props.id, this.props.types[0]);
        } else {
            this.setState({ anchorEl: event.currentTarget });
        }
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
            <div style={{display: 'inline-block'}} >
                <Button
                    variant={this.props.mini ? 'fab' : 'raised'}
                    color="primary"
                    aria-label="add"
                    aria-haspopup="true"
                    mini={this.props.mini}
                    onClick={this.handleClick}
                >
                    {this.props.mini ? <AddIcon /> :'Add to cart'}
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    {items}
                </Menu>
            </div>
		);
	}
}

AddToCart.propTypes = {
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
)(AddToCart);
