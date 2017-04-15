import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import LazySizes from 'react-lazysizes';
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
				<LazySizes className="superlazy scale-img" dataSizes="auto" alt="It's not loading!" src={item.super_thumbs_src.toString()} dataSrc={item.thumbs_src.toString()}></LazySizes>
			</div>
			<span>{item.img_txt.toString()}</span>
		</li>,
	);

	const listCaruosel = props.list.map(item =>
		<div key={item.item_number.toString()} className="img-wrap1">
			<LazySizes dataSizes="auto" alt="It's not loading!" dataSrc={parseImgSrc(item.thumbs_src).toString()}></LazySizes>
		</div>,
	);

	if (props.category === category.CAROUSEL) {
		return (
			<div className="sidescroller">
				<Slider {...settings}>
					{ listCaruosel }
				</Slider>
			</div>
		);
	}

	return (
		<div>
			<div className="desc_holder">
				<div className="desc_text">{category[props.category]}</div>
			</div>
			<ul className="projects">
				{ listItems }
			</ul>
		</div>
	);
};

PageContainer.propTypes = {
	list: PropTypes.arrayOf(PropTypes.shape({
		item_number: PropTypes.number,
		img_src: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.arrayOf(PropTypes.string),
		]),
		thumbs_src: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.arrayOf(PropTypes.string),
		]),
		super_thumbs_src: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.arrayOf(PropTypes.string),
		]),
		img_txt: PropTypes.string,
	})).isRequired,
	onImageClick: PropTypes.func.isRequired,
	category: PropTypes.string.isRequired,
	introOn: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
	list: state.list,
	category: state.category,
	introOn: state.introOn,
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
