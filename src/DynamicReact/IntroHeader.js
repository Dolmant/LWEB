import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import $ from './../jquery.min';
import { selectPage, updateIntroState, toggleSidebar, updateCategory } from './Actions';
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
        let totalCount = 0;
        this.props.shoppingCart.forEach((item) => {
            totalCount += item.count;
        })
		const result = (
				<div className="container">
					<div className="left">
						{/* <a className="fade" rel="noopener noreferrer" style={style()} target="_blank" href="http://leotide.tumblr.com/">Tumblr!</a> */}
					</div>
					<h1>
						<img onClick={() => this.props.onHomeClick()} src="./assets/images/LEOTIDE.png" alt="LeoTide"></img>
					</h1>
					<div className="right">
						{/* <a className="about-me" style={style()} onClick={() => this.aboutMeClick()}>About Me</a> */}
						{!this.props.introOn && this.props.category !== 'CHECKOUT'? 
                            <div className="cursor" onClick={() => this.props.updateCategory('CHECKOUT')}>
                                <div className="total-count">
                                    {totalCount}
                                </div>
                                <i className="fa fa-shopping-cart" />
                            </div>
                        :
                            null}
					</div>
				</div>
		);
		if (this.props.introOn) {
			return (
				<header className="introHeaderTemp">
					{result}
				</header>
			);
		}
		return (
			<header className="main-header">
				<Motion defaultStyle={{opacity: 0}} style={{opacity: spring(1, {stiffness: 20, damping: 17})}}>
					{interpolatingStyle => 
						<header key={1} style={interpolatingStyle} className="main-header">
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
	updateCategory: PropTypes.func.isRequired,
	sidebarOpen: PropTypes.bool.isRequired,
	category: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
    shoppingCart: state.shoppingCart,
	introOn: state.introOn,
	category: state.category,
	sidebarOpen: state.sidebarOpen,
});

const mapDispatchToProps = dispatch => ({
	onSidebarOpen: () => {
		dispatch(toggleSidebar());
	},
	onHomeClick: () => {
		dispatch(selectPage('home'));
	},
	onScrollOver: () => {
		dispatch(updateIntroState(false));
    },
    updateCategory: (page) => {
		dispatch(updateCategory(page));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(IntroHeader);
