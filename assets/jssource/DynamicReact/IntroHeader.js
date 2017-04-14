import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import $ from './../jquery.min';
import { toggleSidebar } from './../consts';
import animateScroll from './../constFunctions';

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

	SidebarHelper(delay) {
		setTimeout(() => {
			if (this.props.sidebarOpen) {
				$('.overlay, header, footer').unbind('touchmove', (event) => {
					event.preventDefault();
				});
			} else {
				$('.overlay, header, footer').bind('touchmove', (event) => {
					event.preventDefault();
				});
			}
			this.props.onSidebarOpen();
			$('html').toggleClass('sidebar-open');
		}, delay);
	}

	aboutMeClick() {
		if (this.props.introOn) {
			this.SidebarHelper(1000);
			animateScroll(1000);
		} else {
			this.SidebarHelper(0);
		}
	}

	render() {
		const style = () => {
			if (this.props.introOn) {
				return {
					color: 'white',
				};
			}
			return {
				color: 'black',
			};
		};

		return (
			<div className="container">
				<div className="left">
					<a className="fade" rel="noopener noreferrer" style={style()} target="_blank" href="http://leotide.tumblr.com/">Tumblr!</a>
				</div>
				<h1>
					<img src="./assets/images/LEOTIDErev.png" alt="LeoTide"></img>
				</h1>
				<div className="right">
					<a className="about-me" style={style()} onClick={() => this.aboutMeClick()}>About Me</a>
				</div>
			</div>
		);
	}
}

IntroHeader.propTypes = {
	introOn: PropTypes.bool.isRequired,
	onSidebarOpen: PropTypes.func.isRequired,
	sidebarOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
	introOn: state.introOn,
	sidebarOpen: state.sidebarOpen,
});

const mapDispatchToProps = dispatch => ({
	onSidebarOpen: () => {
		dispatch(toggleSidebar());
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(IntroHeader);
