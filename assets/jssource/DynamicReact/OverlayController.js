import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Overlay from './Overlay';

const OverlayController = (props) => {
	if (props.overlay.state) {
		return <Overlay />;
	}
	return null;
};

OverlayController.propTypes = {
	overlay: PropTypes.shape({
		arrows: PropTypes.shape({
			left: PropTypes.bool.isRequired,
			right: PropTypes.bool.isRequired,
			up: PropTypes.bool.isRequired,
			down: PropTypes.bool.isRequired,
		}).isRequired,
		state: PropTypes.bool.isRequired,
		image: PropTypes.bool.isRequired,
	}).isRequired,
};

const mapStateToProps = state => ({
	overlay: state.overlay,
});

export default connect(
	mapStateToProps,
)(OverlayController);
