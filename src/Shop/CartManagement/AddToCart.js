// @flow
import {connect} from "react-redux"
import React from "react"
import Button from "@material-ui/core/Button"
import AddIcon from "@material-ui/icons/Add"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import {toastr} from "react-redux-toastr"
import {actionCreators} from "./CartManagementActions"

type Props = {
    id: number,
    types: any,
    addToCart: (number, any) => void,
    mini: bool,
};

type State = {
    anchorEl: any,
};

class AddToCart extends React.Component<Props, State> {
    state = {
        anchorEl: null,
    };

    handleClick = (event) => {
        if (this.props.types.length === 1) {
            toastr.success("Success", "Item added to cart")
            this.props.addToCart(this.props.id, this.props.types[0])
        } else {
            this.setState({anchorEl: event.currentTarget})
        }
    };

    handleClose = () => {
        this.setState({anchorEl: null})
    };

    render() {
        const {anchorEl} = this.state
        const items = this.props.types.map(type => (
            <MenuItem
                onClick={() => {
                    toastr.success("Success", "Item added to cart")
                    this.props.addToCart(this.props.id, type)
                    this.handleClose()
                }}
            >
                {type.desc}
            </MenuItem>
            ))
        return (
            <div style={{display: "inline-block"}} >
                <Button
                    variant={this.props.mini ? "fab" : "raised"}
                    color="primary"
                    aria-label="add"
                    aria-haspopup="true"
                    mini={this.props.mini}
                    onClick={this.handleClick}
                >
                    {this.props.mini ? <AddIcon /> : "Add to cart"}
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
        )
    }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = {
    ...actionCreators,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddToCart)
