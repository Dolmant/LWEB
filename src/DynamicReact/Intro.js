import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import {Motion, spring, presets} from 'react-motion';
import { scrollPoint, convert_type } from './../consts';
import { updateIntroState } from './Actions';

let bounce = true;
class Intro extends React.Component {
	componentDidMount() {
		// window.addEventListener('scroll', this.handleScroll);
		window.addEventListener('wheel', (event) => this.handleScroll(event));
	}
	componentWillUnmount() {
		window.removeEventListener('wheel', (event) => this.handleScroll(event));
	}

	handleScroll(event) {
		if (bounce) {
			this.props.onScrollOver();
		}
		bounce = false;	
	}

	render() {
		return (
			<Motion style={{height: spring(100 * this.props.introOn, {stiffness: 300, damping: 30})}}>
				{interpolatingStyle => 
					<div key={1} style={convert_type(interpolatingStyle, ['height'], 'vh')} className="intro-container">
						<Motion defaultStyle={{maxHeight: 0}} style={{maxHeight: spring(40, {stiffness: 30, damping: 6})}}>
							{interpolatingStyle2 => 
								<div key={2} className="intro-logo" >
									<img style={convert_type(interpolatingStyle2, ['maxHeight'], 'vh')} onClick={() => { this.props.onScrollOver(); }} alt="It's not loading!" src="./assets/images/LEOTIDE.png"></img>
								</div>
							}
						</Motion>
                        <div onClick={() => { this.props.onScrollOver(); }} className="into-scroll-prompt">
                            <div className="blink-container">
                                <i className="fas fa-arrow-alt-circle-down"></i>
                                <div className="blink" />
                            </div>
                            <div>{'Scroll down'}</div>
                        </div>
						<div className="introImage" id="introImage" />
					</div>
				}
			</Motion>
		);
	}
}

Intro.propTypes = {
	onScrollOver: PropTypes.func.isRequired,
	introOn: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
	introOn: state.introOn,
});

const mapDispatchToProps = dispatch => ({
	onScrollOver: () => {
		dispatch(updateIntroState(false));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Intro);
