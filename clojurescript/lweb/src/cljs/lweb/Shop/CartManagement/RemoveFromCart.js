// @flow
import {connect} from "react-redux"
import React from "react"
import Button from "@material-ui/core/Button"
import RemoveIcon from "@material-ui/icons/Remove"
import {toastr} from "react-redux-toastr"
import {actionCreators} from "./CartManagementActions"

type Props = {
    id: number,
    type: any,
    mini: bool,
    removeFromCart: (number, any) => void,
};

class RemoveFromCart extends React.Component<Props> {
    render() {
        return (
            <div style={{display: "inline-block"}} >
                <Button
                    mini={this.props.mini}
                    variant={this.props.mini ? "fab" : "raised"}
                    color="secondary"
                    onClick={() => {
                        toastr.success("Success", "Item removed from cart")
                        this.props.removeFromCart(this.props.id, this.props.type)
                    }}
                >
                    {this.props.mini ? <RemoveIcon /> : "Remove from cart"}
                </Button>
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
)(RemoveFromCart)
