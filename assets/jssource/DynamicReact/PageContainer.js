import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import LazySizes from 'react-lazysizes';
import {TransitionMotion, spring, presets} from 'react-motion';
import { updateOverlayImage, category, toggleOverlay, convert_type } from './../consts';

class LeftNavButton extends React.Component {
	render() {
		return <button {...this.props}><div className="slick-next-div" /></button>
	}
}
class RightNavButton extends React.Component {
	render() {
		return <button {...this.props}><div className="slick-prev-div" /></button>
	}
}

const PageContainer = (props) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		lazyLoad: false,
		autoplay: true,
		autoplaySpeed: 10000,
	};

	const willLeave = () => {
		return {left: spring(100, {stiffness: 300, damping: 30, precision: 1})};
	};

	const willEnter = () => {
		return {left: -100};
	};

	const listItems = (
		<TransitionMotion
			willLeave={willLeave}
			willEnter={willEnter}
			defaultStyles={props.list.map(item => ({
				key: item.item_number.toString(),
				style: {left: -100},
			}))}
			styles={props.list.map(item => ({
				key: item.item_number.toString(),
				style: {left: spring(0, {stiffness: 300, damping: 30, precision: 1})},
				data: {
					item_number: item.item_number,
					thumbs_src: item.thumbs_src,
					super_thumbs_src: item.super_thumbs_src,
					img_txt: item.img_txt,
				}
			}))}>
			{interpolatedStyles =>
				<ul className="projects">
					{interpolatedStyles.map((item, index) =>
						<li key={item.key} style={{...convert_type(item.style, ['left'], 'vw')}} onClick={() => props.onImageClick(item.data.item_number)}>
							<div className="img-wrap">
								<img alt="It's not loading!" src={item.data.thumbs_src.toString()} />
							</div>
							<span>{item.data.img_txt.toString()}</span>
						</li>,
					)}
				</ul>
			}
		</TransitionMotion>
	);

	const listCaruosel = props.list.map(item =>
		<div key={item.item_number.toString()} className="carousel-img-wrap">
			<div style={{
				backgroundImage: `url("${item.thumbs_src.toString()}")`,
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				height: '30vh',
				width: '20vw',
			}} />
		</div>,
	);

	if (props.home) {
		return (
			<div>
				<div className="sidescroller">
					<Slider {...settings} nextArrow={<LeftNavButton />} prevArrow={<RightNavButton />}>
						{ listCaruosel }
					</Slider>
				</div>
				<div className="desc_holder">
					<div className="desc_text">
						<h2>Hello!</h2>
						I am a multi-discliplinary, multi-talented and multi-limbed masters student from the University of Technology Sydney engaging in both<br />
						<br />
						<span className="pink"><b>Science</b></span>   and   <span className="blue"><b>Design</b></span><br />
						<span className="pink">(Research) </span><span className="blue">(Animation/illustration)</span><br />
						<img src="./assets/icons/bubbles.png" /><br />
						<span className="red"><b>Biomedical animation/Scientific illustration/data visulisation/communication</b></span><br />
						Whilst following my passion as a freelance scientific illustrator!
					</div>
					<div className="desc_text last-element">
						<h2> Interested in a commission or purchasing a print?</h2>
						Please use the "CONTACT ME!" button on the bottom left of the screen to make an enquiry:<br />
						<div className="left">
							<span className="underline">For a commission:</span><br />
							- What type of comission? 2D/3D animation, illustration, 3D model or sketch?<br />
							- Subject matter, size, black/white or colour, etc<br />
							<br />
							<span className="underline">For purchasing an item:</span><br />
							- Double check the PRINTS section to see if the item you would like is already framed<br />
							- Provide the name of the artwork you want (with/without frame) and your address<br />
							- I will contact you with the sizes available and prices including shipping straight to your door!
						</div>
					</div>
					<div className="boxes">
						<div><img src="./assets/icons/tick.jpg" /><h2>ORGANISED</h2></div>
						<div><img src="./assets/icons/tick.jpg" /><h2>ECONOMICAL</h2></div>
						<div><img src="./assets/icons/tick.jpg" /><h2>FRIENDLY</h2></div>
					</div>
				</div>
			</div>
		);
	}
	return (
		<div>
			<div className="desc">
				<div className="text">{category[props.category]}</div>
			</div>
			
			{ listItems }
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
	home: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
	list: state.list,
	home: state.home,
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
