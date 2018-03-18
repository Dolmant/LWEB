import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

class PostageCalculator extends React.Component {
	render() {
		return (
            <div>
            </div>
		);
	}
}

PostageCalculator.propTypes = {
	postageCalculator: PropTypes.any.isRequired,
};

const mapStateToProps = state => ({
	postageCalculator: state.postageCalculator,
});

const mapDispatchToProps = dispatch => ({
	setCountry: (country) => {
		dispatch(actionCreators.setCountry(country));
	},
	setPostcode: (postcode) => {
		dispatch(actionCreators.setPostcode(postcode));
	},
	postage: () => {
		dispatch(actionCreators.postage());
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(PostageCalculator);
