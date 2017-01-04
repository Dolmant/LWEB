import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
import { updateCategory } from './../consts';

const Filters = props => (
	<div className="container">
		<ul>
			<li><a onClick={() => props.oncatClick('CAROUSEL')} id="carousel">Leo Over Time</a></li>
			<li><a onClick={() => props.oncatClick('PROJECTS')} id="projects">All Images</a></li>
			<li><a onClick={() => props.oncatClick('ANIMALS')} id="animals">Nature</a></li>
			<li><a onClick={() => props.oncatClick('SCIENCE')} id="science">Scientific Illustration</a></li>
			<li><a onClick={() => props.oncatClick('FACTS')} id="facts">Fact Studies</a></li>
		</ul>
	</div>
);


Filters.propTypes = {
	oncatClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
	oncatClick: (id) => {
		dispatch(updateCategory(id));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Filters);
