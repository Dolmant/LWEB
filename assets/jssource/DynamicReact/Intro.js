import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
import $ from './../jquery.min';
import { scrollPoint, updateIntroState } from './../consts';
import animateScroll from './../constFunctions';

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
		window.addEventListener('scroll', this.ScrollDebouncer);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.ScrollDebouncer);
		$('header').removeClass('introHeader');
		setTimeout(() => {
			$('.filters').toggleClass('open');
		}, 250);
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
		const style = {
			minHeight: $(window).height(),
		};
		return (
			<div>
				<div className="intro-logo" >
					<img onClick={() => { animateScroll(1000); }} alt="It's not loading!" src="./assets/images/LEOTIDE.png"></img>
				</div>
				<video className="introVideo" style={style} autoPlay="1" loop="1">
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
