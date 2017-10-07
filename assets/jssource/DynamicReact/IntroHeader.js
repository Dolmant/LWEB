import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import $ from './../jquery.min';
import { toggleSidebar } from './../consts';
import { selectHome, updateIntroState } from './../consts';
import {Motion, spring, presets} from 'react-motion';

class IntroHeader extends React.Component {
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
			this.props.onScrollOver();
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

		const result = (
				<div className="container">
					<div className="left">
						{/* <a className="fade" rel="noopener noreferrer" style={style()} target="_blank" href="http://leotide.tumblr.com/">Tumblr!</a> */}
					</div>
					<h1>
						<img onClick={() => this.props.onHomeClick()} src="./assets/images/LEOTIDErev.png" alt="LeoTide"></img>
					</h1>
					<div className="right">
						{/* <a className="about-me" style={style()} onClick={() => this.aboutMeClick()}>About Me</a> */}
					</div>
				</div>
		);
		if (this.props.introOn) {
			return (
				<header className={this.props.introOn ? 'introHeaderTemp' : ''}>
					{result}
				</header>
			);
		}
		return (
			<header className={this.props.introOn ? 'introHeaderTemp' : ''}>
				<Motion defaultStyle={{opacity: 0}} style={{opacity: spring(1, {stiffness: 20, damping: 17})}}>
					{interpolatingStyle => 
						<header key={1} style={interpolatingStyle} className={this.props.introOn ? 'introHeaderTemp' : ''}>
							{result}
						</header>
					}
				</Motion>
			</header>
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
	onHomeClick: () => {
		dispatch(selectHome());
	},
	onScrollOver: () => {
		dispatch(updateIntroState(false));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(IntroHeader);
