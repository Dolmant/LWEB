import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
import $ from './../jquery.min';
import { toggleSidebar, updateIntroState } from './../consts';

class IntroHeader extends React.Component {
	static scrollbarWidth() {
		let parent;
		let child;
		let width;
		if (width === undefined) {
			parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body');
			child = parent.children();
			width = child.innerWidth() - child.height(99).innerWidth();
			parent.remove();
		}
		return width;
	}

	SidebarHelper() {
		if (parseInt($('footer').css('padding-right'), 10) > 0) {
			$('footer, header, body, .filters.open').css('padding-right', 0);
			$('.overlay, header, footer').unbind('touchmove', (event) => {
				event.preventDefault();
			});
		} else {
			$('footer, header, body, .filters.open').css('padding-right', IntroHeader.scrollbarWidth);
			$('.overlay, header, footer').bind('touchmove', (event) => {
				event.preventDefault();
			});
		}
		this.props.onSidebarOpen();
		$('html').toggleClass('sidebar-open');
	}

	aboutMeClick() {
		if (this.props.introOn) {
			$('.introVideo').get(0).pause();
			$('.intro').addClass('animateHeight');
			setTimeout(() => {
				this.props.onScrollOver();
				$('.intro').removeClass('animateHeight');
				this.SidebarHelper();
			}, 1000);
		} else {
			this.SidebarHelper();
		}
	}

	render() {
		return (
			<div className="container">
				<div className="left">
					<a className="fade" href="http://leotide.tumblr.com/">Tumblr!</a>
				</div>
				<h1>
					<img src="./assets/images/LEOTIDErev.png" alt="LeoTide"></img>
				</h1>
				<div className="right">
					<a className="about-me" onClick={() => this.aboutMeClick()}>About Leo</a>
				</div>
			</div>
		);
	}
}

IntroHeader.propTypes = {
	introOn: PropTypes.bool.isRequired,
	onSidebarOpen: PropTypes.func.isRequired,
	onScrollOver: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	introOn: state.introOn,
});

const mapDispatchToProps = dispatch => ({
	onSidebarOpen: () => {
		dispatch(toggleSidebar());
	},
	onScrollOver: () => {
		dispatch(updateIntroState(false));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(IntroHeader);
