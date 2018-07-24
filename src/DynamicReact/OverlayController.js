// @flow
import React from 'react';
import { connect } from 'react-redux';
import Overlay from './Overlay';

type Props = {
	overlay: any,
};

const OverlayController = (props) => {
	if (props.overlay.state) {
		return <Overlay />;
	}
	return null;
};

const mapStateToProps = state => ({
	overlay: state.overlay,
});

export default connect(
	mapStateToProps,
)(OverlayController);
