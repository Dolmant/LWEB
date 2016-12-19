import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
import { toggleOverlay } from './../project_separate';

const PageContainer = (props) => {
	const listItems = props.list.map(item =>
		<li key={item.item_number.toString()}>
			<div className="img-wrap">
				<img alt="It's not loading!" onClick={() => { toggleOverlay(true, true, item.img_src.toString(), item.img_txt.toString()); }} src={item.img_src.toString()}></img>
			</div>
			<span>{item.img_txt.toString()}</span>
		</li>,
	);
	return (
		<ul className="projects">
			{ listItems }
		</ul>
	);
};

PageContainer.propTypes = {
	list: PropTypes.arrayOf(PropTypes.shape({
		item_number: React.PropTypes.number,
		img_src: React.PropTypes.string,
		img_txt: React.PropTypes.string,
	})).isRequired,
};

const mapStateToProps = state => ({
	list: state.list,
});

export default connect(
	mapStateToProps,
)(PageContainer);
