import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
import { updatecat } from './../consts';

const Filters = props => (
	<div className="container">
		<ul>
			<li><a onClick={() => props.oncatClick('CAROUSEL')} id="carousel">Leo Over Time</a></li>
			<li><a onClick={() => props.oncatClick('PROJECTS')} id="projects">All Leo</a></li>
			<li><a onClick={() => props.oncatClick('ANIMALS')} id="animals">Leo&apos;s Animals</a></li>
			<li><a onClick={() => props.oncatClick('SCIENCE')} id="science">Leo&apos;s Science</a></li>
			<li><a onClick={() => props.oncatClick('FACTS')} id="facts">Leo&apos;s Facts</a></li>
		</ul>
	</div>
);


Filters.propTypes = {
	oncatClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
	oncatClick: (id) => {
		dispatch(updatecat(id));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Filters);
