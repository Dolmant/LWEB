import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
import { toggleOverlay } from './../project_separate';
import { updateOverlayImage } from './../consts';

const PageContainer = (props) => {
	const listItems = props.list.map(item =>
		<li key={item.item_number.toString()}>
			<div className="img-wrap">
				<img alt="It's not loading!" src={item.img_src.toString()} onClick={() => props.onImageClick(item.item_number)}></img>
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
		item_number: PropTypes.number,
		img_src: PropTypes.string,
		img_txt: PropTypes.string,
	})).isRequired,
	onImageClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	list: state.list,
});

const mapDispatchToProps = dispatch => ({
	onImageClick: (index) => {
		dispatch(updateOverlayImage(index));
		toggleOverlay(true, true);
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(PageContainer);
