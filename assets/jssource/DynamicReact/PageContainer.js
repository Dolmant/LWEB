import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
import Slider from 'react-slick';
import { updateOverlayImage, category, toggleOverlay } from './../consts';

const PageContainer = (props) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: 1,
		autoplaySpeed: 1000,
		pauseOnHover: true,
		arrows: true,
	};

	const parseImgSrc = (img_src) => {
		if (Array.isArray(img_src)) {
			return img_src[0];
		}
		return img_src;
	};

	const listItems = props.list.map(item =>
		<li onClick={() => props.onImageClick(item.item_number)} key={item.item_number.toString()}>
			<div className="img-wrap">
				<img alt="It's not loading!" src={item.thumbs_src.toString()}></img>
			</div>
			<span>{item.img_txt.toString()}</span>
		</li>,
	);

	const listScroller = props.list.map(item =>
		<div key={item.item_number.toString()} className="img-wrap1">
			<img alt="It's not loading!" src={parseImgSrc(item.thumbs_src).toString()}></img>
		</div>,
	);

	if (props.category === category.CAROUSEL) {
		return (
			<div className="sidescroller">
				<Slider {...settings}>
					{ listScroller }
				</Slider>
			</div>
		);
	}
	return (
		<ul className="projects">
			{ listItems }
		</ul>
	);
};

PageContainer.propTypes = {
	list: PropTypes.arrayOf(PropTypes.shape({
		item_number: PropTypes.number,
		img_src: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.arrayOf(PropTypes.string),
		]),
		img_txt: PropTypes.string,
	})).isRequired,
	onImageClick: PropTypes.func.isRequired,
	category: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
	list: state.list,
	category: state.category,
});

const mapDispatchToProps = dispatch => ({
	onImageClick: (index) => {
		dispatch(updateOverlayImage(index));
		dispatch(toggleOverlay(true, true));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(PageContainer);
