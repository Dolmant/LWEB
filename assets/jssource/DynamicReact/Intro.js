import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
import $ from './../jquery.min';
import { scrollPoint, updateIntroState } from './../consts';

class Intro extends React.Component {
	componentDidMount() {
		this.ScrollDebouncer = (event) => {
			if (!this.bounce) {
				this.event = event;
				window.requestAnimationFrame(() => (this.handleScroll(this.event)));
				this.bounce = true;
			}
		};
		this.bounce = false;
		$('footer').addClass('introStatic');
		$('.page.container').addClass('noPad');
		$('.introVideo').css({ 'min-height': $(window).height() });
		window.addEventListener('scroll', this.ScrollDebouncer);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.ScrollDebouncer);
		$('.page.container').removeClass('noPad');
		$('header').removeClass('introHeader');
		$('footer').removeClass('introStatic');
		const num = 250;
		$('header a').addClass('scrolled');
		setTimeout(() => {
			$('.filters').toggleClass('open');
		}, num);
	}

	handleScroll(event) {
		if ($(window).scrollTop() >= scrollPoint - 0) {
			event.stopPropagation();
			$('.introVideo').get(0).pause();
			$(window).scrollTop($(window).scrollTop() - scrollPoint);
			this.props.onScrollOver();
		}
		this.bounce = false;
	}

	render() {
		return (
			<div>
				<div className="intro-logo" >
					<img
						onClick={() => {
							$('.introVideo').get(0).pause();
							$('.intro').addClass('animateHeight');
							setTimeout(() => {
								this.props.onScrollOver();
								$('.intro').removeClass('animateHeight');
							}, 1000);
						}}
						alt="It's not loading!" src="./assets/images/LEOTIDE.png"></img>
				</div>
				<video className="introVideo" autoPlay="1" loop="1">
					<source src="./assets/vids/Nucleus03.mp4" type="video/mp4"></source>
					Your browser does not support the video tag.
				</video>
			</div>
		);
	}
}

Intro.propTypes = {
	onScrollOver: PropTypes.func.isRequired,
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
	onScrollOver: () => {
		dispatch(updateIntroState(false));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Intro);
