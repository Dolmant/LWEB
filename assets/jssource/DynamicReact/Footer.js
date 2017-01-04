import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
import { toggleOverlay } from './../consts';

const Footer = props => (
	<footer className="introStatic">
		<div className="container">
			<div className="contact">
				<ul>
					<li><span>e</span><a href="mailto:leo.herson@gmail.com">leo.herson@gmail.com</a></li>
					<li><span>p</span><a>Just kidding, email me!</a></li>
					<li><span>a</span><address>231 Derp Street, CBD 2000 | Sydney, Australia</address></li>
				</ul>
			</div>
			<div className="contact_me">
				<a onClick={() => props.oncontactClick()} id="contact_overlay">Contact Me!</a>
			</div>
			<div className="social">
				<ul>
					<li>
						<a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/YESTHISISDOGIAMONTHEPHONE">
							<img alt="It's not loading!" src="./assets/icons/facebookicon.png"></img>
						</a>
					</li>
					<li>
						<a target="_blank" rel="noopener noreferrer" href="http://leotide.tumblr.com/">
							<img alt="It's not loading!" src="./assets/icons/tumblricon.png"></img>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</footer>
);

Footer.propTypes = {
	oncontactClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
	oncontactClick: () => {
		dispatch(toggleOverlay(true, false));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Footer);
