import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
import { toggleOverlay } from './../consts';

const Footer = (props) => {
	if (!props.introOn) {
		return (
			<footer>
				<div className="footer-container container">
					<div className="contact">
						<ul>
							<li><a>Member of the Australian Institute of Medical and Biological Illustration</a></li>
						</ul>
					</div>
					<div className="contact_me">
						<a onClick={() => props.oncontactClick()} id="contact_overlay">Contact Me!</a>
					</div>
					<div className="social">
						<ul>
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
	}
	return null;
};

Footer.propTypes = {
	oncontactClick: PropTypes.func.isRequired,
	introOn: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
	introOn: state.introOn,
});

const mapDispatchToProps = dispatch => ({
	oncontactClick: () => {
		dispatch(toggleOverlay(true, false));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Footer);
