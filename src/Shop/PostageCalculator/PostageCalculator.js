import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
import { FormControl, FormHelperText } from 'material-ui/Form';
import {actionCreators} from './PostageCalculatorActions';

class PostageCalculator extends React.Component {
    handleChange(event) {
        this.props.postage(event.target.value);
    };
	render() {
		return (
            <div>
                <FormControl error={this.props.postageType === 0}>
                    <InputLabel htmlFor="postage-simple">Postage</InputLabel>
                    <Select
                        value={this.props.postageType}
                        onChange={(event) => this.handleChange(event)}
                        inputProps={{
                            name: 'postage',
                            id: 'postage-simple',
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
		);
	}
}

PostageCalculator.propTypes = {
	postageCalculator: PropTypes.any.isRequired,
};

const mapStateToProps = state => ({
	postageType: state.postageCalculator.postageResult.type,
});

const mapDispatchToProps = dispatch => ({
	setCountry: (country) => {
		dispatch(actionCreators.setCountry(country));
	},
	setPostcode: (postcode) => {
		dispatch(actionCreators.setPostcode(postcode));
	},
	postage: (type) => {
		dispatch(actionCreators.postage(type));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(PostageCalculator);
