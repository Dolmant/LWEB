import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import LazySizes from 'react-lazysizes';
import $ from './../jquery.min';
import { navOverlayImage, toggleOverlay } from './../consts';

class Overlay extends React.Component {
	formOverride(event) {
		event.preventDefault();
		if (!$('#element_7')[0].value) {
			$('.error_message')[0].innerText = 'Please add your contact details!';
		} else {
			this.props.toggleOverlayDispatch(false, false);
			$.ajax({
				url: '/postform',
				type: 'POST',
				data: $('#contact-form').serialize(),
				beforeSend: () => {
					const num = 0;
				},
				success: (data) => {
					const num = 0;
				},
			});
		}
	}

	backgroundOverlayClick(event) {
		if (!($(event.target).is('.overlay_container') ||
		$(event.target).is('.downnav_overlay') ||
		$(event.target).is('.upnav_overlay') ||
		$(event.target).is('.rightnav_overlay') ||
		$(event.target).is('.leftnav_overlay'))) {
			this.props.toggleOverlayDispatch(false, false);
		}
	}

	CloseButtonClick(event) {
		event.preventDefault();
		this.props.toggleOverlayDispatch(false, false);
	}

	render() {
		const Arrows = () => {
			const arrowreturn = [];
			if (this.props.overlay.arrows.left) {
				arrowreturn.push(
					<div key="1" className="img-wrap-left-overlay">
						<img alt="It's not loading!" src="./assets/icons/LeftIcon.png" onClick={() => this.props.onDirectionClick('left')} className="leftnav_overlay"></img>
					</div>,
				);
			}
			if (this.props.overlay.arrows.right) {
				arrowreturn.push(
					<div key="2" className="img-wrap-right-overlay">
						<img alt="It's not loading!" src="./assets/icons/RightIcon.png" onClick={() => this.props.onDirectionClick('right')} className="rightnav_overlay"></img>
					</div>,
				);
			}
			if (this.props.overlay.arrows.up) {
				arrowreturn.push(
					<div key="3" className="img-wrap-up-overlay">
						<img alt="It's not loading!" src="./assets/icons/UpIcon.png" onClick={() => this.props.onDirectionClick('up')} className="upnav_overlay"></img>
					</div>,
				);
			}
			if (this.props.overlay.arrows.down) {
				arrowreturn.push(
					<div key="4" className="img-wrap-down-overlay">
						<img alt="It's not loading!" src="./assets/icons/DownIcon.png" onClick={() => this.props.onDirectionClick('down')} className="downnav_overlay"></img>
					</div>,
				);
			}
			return (
				<div>
					{ arrowreturn }
				</div>
			);
		};
		const Overlays = () => {
			if (this.props.overlay.image) {
				return (
					<div className="overlayimagecontrol">
						{ Arrows() }
						<div className="img-wrap-overlay">
							<LazySizes
								dataSizes="auto"
								alt="It's not loading!"
								className="scale-img blur-up overlayimage"
								src={this.props.overlay_thumb_src.toString()}
								dataSrc={this.props.overlay_image_src.toString()}
							>
							</LazySizes>
						</div>
						<span className="overlaytext"></span>
					</div>
				);
			}
			return (
				<div className="overlayform">
					<form id="contact-form" onSubmit={event => this.formOverride(event)} target="_self" className="topLabel">
						<div className="form-head">
							<h7>The Leo Signal</h7>
							<h8>Fill out the form below to get in contact with Me!</h8>
						</div>
						<ul>
							<li id="li-0" className="data_container">
								<label htmlFor="element_0">Name</label>
								<div className="form-field">
									<span>
										<input id="element_2" name="Firstname" type="text"></input>
										<label htmlFor="element_2" className="form-bottom-label">First</label>
									</span>
									<span>
										<input id="element_3" name="Lastname" type="text"></input>
										<label htmlFor="element_3" className="form-bottom-label">Last</label>
									</span>
								</div>
							</li>
							<li>
								<label htmlFor="element_7">Contact Details<span>*</span></label>
								<div className="form-field">
									<input id="element_7" name="Contact Details" type="text"></input>
									<label className="error_message" htmlFor="element_7"></label>
								</div>
							</li>
							<li className="textarea">
								<label htmlFor="element_8">Message</label>
								<div className="form-field"><textarea id="element_8" name="Message" cols="45" rows="10"></textarea></div>
							</li>
							<li className="submit">
								<input value="Submit" type="submit"></input>
							</li>
						</ul>
						<input name="embed" value="form" type="hidden"></input>
						<input type="hidden" name="http_referer" value="http://www.leotide.com/"></input>
					</form>
				</div>
			);
		};

		return (
			<div className="overlay_top">
				<div id="backgroundOverlay" className="backgroundOverlay" onClick={event => this.backgroundOverlayClick(event)}></div>
				<div className="overlay_container">
					<a className="closebutton strokeme" onClick={event => this.CloseButtonClick(event)}>✖</a>
					{ Overlays() }
				</div>
			</div>
		);
	}
}

Overlay.propTypes = {
	onDirectionClick: PropTypes.func.isRequired,
	toggleOverlayDispatch: PropTypes.func.isRequired,
	overlay: PropTypes.shape({
		arrows: PropTypes.shape({
			left: PropTypes.bool.isRequired,
			right: PropTypes.bool.isRequired,
			up: PropTypes.bool.isRequired,
			down: PropTypes.bool.isRequired,
		}).isRequired,
		state: PropTypes.bool.isRequired,
		image: PropTypes.bool.isRequired,
	}).isRequired,
	overlay_image_src: PropTypes.string.isRequired,
	overlay_thumb_src: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
	overlay_image_src: state.overlay_image_src,
	overlay_thumb_src: state.overlay_thumb_src,
	overlay: state.overlay,
});

const mapDispatchToProps = dispatch => ({
	onDirectionClick: (direction) => {
		dispatch(navOverlayImage(direction));
	},
	toggleOverlayDispatch: (state, image) => {
		dispatch(toggleOverlay(state, image));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Overlay);
