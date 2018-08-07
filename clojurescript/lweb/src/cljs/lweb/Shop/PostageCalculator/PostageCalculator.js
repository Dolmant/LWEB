// @flow
import {connect} from "react-redux"
import React from "react"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControl from "@material-ui/core/FormControl"
import {actionCreators} from "./PostageCalculatorActions"

type Props = {
    postageCalculator: any,
    postageType: any,
    postage: (string) => void,
    setPostcode: (string) => void,
    setCountry: (string) => void,
};

class PostageCalculator extends React.Component<Props> {
    handleChange(event) {
        this.props.postage(event.target.value)
    }
    render() {
        return (
            <div>
                <FormControl error={this.props.postageType === 0}>
                    <InputLabel htmlFor="postage-simple">Postage</InputLabel>
                    <Select
                        value={this.props.postageType}
                        onChange={event => this.handleChange(event)}
                        inputProps={{
                            name: "postage",
                            id: "postage-simple",
                        }}
                    >
                        <MenuItem value={0}>
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>Within Australia</MenuItem>
                        <MenuItem value={2}>Outside Australia</MenuItem>
                    </Select>
                    <FormHelperText>Please select a postage option</FormHelperText>
                </FormControl>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    postageType: state.postageCalculator.postageResult.type,
})

const mapDispatchToProps = dispatch => ({
    setCountry: (country) => {
        dispatch(actionCreators.setCountry(country))
    },
    setPostcode: (postcode) => {
        dispatch(actionCreators.setPostcode(postcode))
    },
    postage: (type) => {
        dispatch(actionCreators.postage(type))
    },
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PostageCalculator)
