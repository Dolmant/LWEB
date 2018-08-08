(ns lweb.DynamicReact.Intro
    (:require [rum.core :as rum]
                [cljs-react-material-ui.icons :as ic]))

(rum/defc OverlayController []

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
