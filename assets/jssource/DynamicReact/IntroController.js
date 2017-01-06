import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Intro from './Intro';

const IntroController = (props) => {
	if (props.introOn) {
		return <Intro />;
	}
	return null;
};

IntroController.propTypes = {
	introOn: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
	introOn: state.introOn,
});

export default connect(
	mapStateToProps,
)(IntroController);
