import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
import { toggleOverlay } from './../project_separate';

const Footer = props => (
	<footer className="introStatic">
		<div className="container">
			<div className="contact">
				<ul>
					<li><span>e</span><a href="mailto:info@hightidenyc.co">info@hightidenyc.co</a></li>
					<li><span>p</span><a href="http://derpspace.usite.pro/(917)%20723-4614">(917) 723-4614</a></li>
					<li><span>a</span><address>231 Derp Street, Snurf 209 | Brooklyn, NY</address></li>
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

const mapDispatchToProps = () => ({
	oncontactClick: () => {
		toggleOverlay(true, false, false);
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Footer);
