import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
import { updateCategory, toggleTouchmenu } from './../consts';

const Filters = (props) => {
	if (!props.introOn) {
		if (!props.isTouch) {
			return (
				<div className="filter-container container">
					<ul>
						<li><a onClick={() => props.oncatClick('PROJECTS')} id="projects">All Images</a></li>
						<li><a onClick={() => props.oncatClick('ANIMALS')} id="animals">Nature</a></li>
						<li><a onClick={() => props.oncatClick('SCIENCE')} id="science">Scientific Illustration</a></li>
						<li><a onClick={() => props.oncatClick('FACTS')} id="facts">Fact Studies</a></li>
						<li><a onClick={() => props.oncatClick('SVSM')} id="svsm">Strategic Visualisation</a></li>
						<li><a onClick={() => props.oncatClick('TYPOGRAPHY')} id="typogrphy">Typography</a></li>
					</ul>
				</div>
			);
		}
		if (props.touchmenu_active) {
			return (
				<div className="filter-container container">
					<a className="menu" onClick={() => props.onmenuClick()}><span>≡</span> Menu</a>
					<div className="drawer active">
						<nav>
							<ul>
								<li><a onClick={() => props.oncatClick('PROJECTS')} id="projects">All Images</a></li>
								<li><a onClick={() => props.oncatClick('ANIMALS')} id="animals">Nature</a></li>
								<li><a onClick={() => props.oncatClick('SCIENCE')} id="science">Scientific Illustration</a></li>
								<li><a onClick={() => props.oncatClick('FACTS')} id="facts">Fact Studies</a></li>
								<li><a onClick={() => props.oncatClick('SVSM')} id="svsm">Strategic Visualisation</a></li>
								<li><a onClick={() => props.oncatClick('TYPOGRAPHY')} id="typogrphy">Typography</a></li>
							</ul>
						</nav>
					</div>
				</div>
			);
		}
		return (
			<div className="filter-container container">
				<a className="menu" onClick={() => props.onmenuClick()}><span>≡</span> Menu</a>
				<div className="drawer">
				</div>
			</div>
		);
	}
	return null;
};

/* Removed Caruosel
<li><a onClick={() => props.oncatClick('CAROUSEL')} id="carousel">
Leo Over Time</a></li>
*/

Filters.propTypes = {
	oncatClick: PropTypes.func.isRequired,
	onmenuClick: PropTypes.func.isRequired,
	introOn: PropTypes.bool.isRequired,
	isTouch: PropTypes.bool.isRequired,
	touchmenu_active: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
	introOn: state.introOn,
	isTouch: state.isTouch,
	touchmenu_active: state.touchmenu_active,
});

const mapDispatchToProps = dispatch => ({
	oncatClick: (id) => {
		dispatch(updateCategory(id));
		dispatch(toggleTouchmenu());
	},
	onmenuClick: () => {
		dispatch(toggleTouchmenu());
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Filters);
