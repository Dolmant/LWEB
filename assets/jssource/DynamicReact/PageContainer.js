// @flow
import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import LazySizes from 'react-lazysizes';
import Checkout from './../Shop/Checkout/Checkout';
import { category, convert_type } from './../consts';
import { updateOverlayImage, toggleOverlay } from './Actions';

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
        <ul className="projects">
            {props.list.map((item, index) =>
                <li key={item.key} onClick={() => props.onImageClick(item.item_number)}>
                    <div className="img-wrap">
                        <img alt="It's not loading!" src={item.thumbs_src.toString()} />
                    </div>
                </li>,
            )}
        </ul>
	);

	const listCaruosel = props.list.map(item =>
		<div key={item.item_number.toString()} className="carousel-img-wrap">
			<div style={{
				backgroundImage: `url("${item.thumbs_src.toString()}")`,
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				height: '50vh',
				width: '20vw',
			}} />
		</div>,
	);

	if (props.page === 'home') {
		return (
			<div>
				<div className="sidescroller">
					<Slider {...settings} nextArrow={<LeftNavButton />} prevArrow={<RightNavButton />}>
						{ listCaruosel }
					</Slider>
				</div>
				<div className="desc_holder">
					<div className="desc_text">
                        <div>
                            <img src="./assets/images/LeotideIcon.png" />
                        </div>
						<h2>Hello!</h2>
						I am a multi-discliplinary, multi-talented and multi-limbed masters student from the University of Technology Sydney engaging in both<br />
						<br />
						<span className="pink"><b>Science</b></span>   and   <span className="blue"><b>Design</b></span><br />
						<span className="pink">(Research) </span><span className="blue">(Animation/illustration)</span><br />
						<img src="./assets/icons/bubbles.png" /><br />
						<span className="red"><b>Biomedical animation/Scientific illustration/data visulisation/communication</b></span><br />
						Whilst following my passion as a freelance scientific illustrator!
					</div>
                    <div className="demoreel">
                        <h2>Check out the demo reel below!</h2>
                        <video autoPlay="" loop="" controls="1">
                            <source src="./assets/images/LHDemoReel18.mp4" type="video/mp4"></source>
                            Your browser does not support the video tag.
                        </video>
                    </div>
					<div className="desc_text last-element">
						<h2> Interested in a commission or purchasing a print?</h2>
						Please use the "CONTACT ME!" button on the bottom left of the screen to make an enquiry:<br />
						<div className="left">
							<span className="underline">For a commission:</span><br />
							- What type of comission? 2D/3D animation, illustration, 3D model or sketch?<br />
							- Subject matter, size, black/white or colour, etc<br />
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
    if (props.category === 'CHECKOUT') {
		return (
            <Checkout />
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
	page: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
	list: state.list,
	page: state.page,
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
