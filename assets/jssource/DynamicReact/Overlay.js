import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
import { navOverlayImage } from './../consts';

const Overlay = props => (
	<div className="overlay_top">
		<div id="backgroundOverlay" className="backgroundOverlay"></div>
		<div className="overlay_container">
			<a className="closebutton">✖</a>
			<div className="overlayform">
				<form id="emf-form" target="_self" className="topLabel" method="post" action="/postform">
					<div id="emf-form-instruction" className="emf-head-widget">
						<div id="emf-form-title" className="emf-bold">Contact EmailMeForm</div>
						<div id="emf-form-description">Fill out the form below to know more on how you can get these stunning themes on your forms &amp; surveys.</div>
					</div>
					<ul>
						<li id="emf-li-0" className="emf-li-field emf-field-new_name data_container   cell_align_left">
							<label className="emf-label-desc" htmlFor="element_0">Name <span>*</span></label>
							<div className="emf-div-field">
								<span>
									<input className="validate[required]" id="element_2" name="Firstname" type="text"></input>
									<label htmlFor="element_2" className="emf-bottom-label emf-text-center">First</label>
								</span>
								<span>
									<input className="validate[required]" id="element_3" name="Lastname" type="text"></input>
									<label htmlFor="element_3" className="emf-bottom-label emf-text-center">Last</label>
								</span>
							</div>
							<div className="emf-clear"></div>
						</li>
						<li id="emf-li-7" className="emf-li-field emf-field-email data_container   ">
							<label className="emf-label-desc" htmlFor="element_7">Email <span>*</span></label>
							<div className="emf-div-field">
								<input id="element_7" name="Email" className="validate[required,custom[email]]" type="text"></input>
							</div>
							<div className="emf-clear"></div>
						</li>
						<li id="emf-li-8" className="emf-li-field emf-field-textarea data_container   ">
							<label className="emf-label-desc" htmlFor="element_8">Message</label>
							<div className="emf-div-field"><textarea id="element_8" name="Message" cols="45" rows="10" className="validate[optional]"></textarea></div>
							<div className="emf-clear"></div>
						</li>
						<li id="emf-li-recaptcha">

						</li>
						<li id="emf-li-post-button" className="middle">
							<input value="Submit" type="submit"></input>
						</li>
					</ul>
					<input name="embed" value="form" type="hidden"></input>
					<input type="hidden" name="http_referer" value="http://www.leotide.com/"></input>
				</form>
			</div>
			<div className="overlayimagecontrol">
				<div className="img-wrap-left-overlay">
					<img alt="It's not loading!" src="" onClick={() => props.onDirectionClick('left')} className="leftnav_overlay"></img>
				</div>
				<div className="img-wrap-right-overlay">
					<img alt="It's not loading!" src="" onClick={() => props.onDirectionClick('right')} className="rightnav_overlay"></img>
				</div>
				<div className="img-wrap-up-overlay">
					<img alt="It's not loading!" src="" onClick={() => props.onDirectionClick('up')} className="upnav_overlay"></img>
				</div>
				<div className="img-wrap-down-overlay">
					<img alt="It's not loading!" src="" onClick={() => props.onDirectionClick('down')} className="downnav_overlay"></img>
				</div>
				<div className="img-wrap-overlay">
					<img alt="It's not loading!" className="overlayimage" src={props.overlay_image_src.toString()}></img>
				</div>
				<span className="overlaytext"></span>
			</div>
		</div>
	</div>
);

Overlay.propTypes = {
	onDirectionClick: PropTypes.func.isRequired,
	overlay_image_src: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
	overlay_image_src: state.overlay_image_src,
});

const mapDispatchToProps = dispatch => ({
	onDirectionClick: (direction) => {
		dispatch(navOverlayImage(direction));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Overlay);
