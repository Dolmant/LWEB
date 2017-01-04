import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
import { navOverlayImage, toggleOverlay } from './../consts';
import $ from './../jquery.min';

class Overlay extends React.Component {
	checkUpdate() {
		const overlay = $('.overlay');
		if (this.props.overlay.state) {
			overlay.addClass('active');
			$('html').addClass('overlay-open');
			$('.backgroundOverlay').show();
			$('.backgroundOverlay').click((event) => {
				if (!($(event.target).is('.overlay_container') ||
				$(event.target).is('.downnav_overlay') ||
				$(event.target).is('.upnav_overlay') ||
				$(event.target).is('.rightnav_overlay') ||
				$(event.target).is('.leftnav_overlay'))) {
					this.props.toggleOverlayDispatch(false, false);
				}
			});
		} else {
			overlay.removeClass('active');
			$('html').removeClass('overlay-open');
			$('.backgroundOverlay').hide();
		}
		if (this.props.overlay.image) {
			$('.overlayimagecontrol').show();
			$('.overlayform').hide();
		} else {
			$('.overlayimagecontrol').hide();
			$('.overlayform').show();
		}
	}
	componentDidMount() {
		$('.closebutton').click((event) => {
			event.preventDefault();
			this.props.toggleOverlayDispatch(false, false);
		});
		$('#emf-form').on('submit', function formoverride(e) {
			e.preventDefault();
			this.props.toggleOverlayDispatch(false, false);
			$.ajax({
				url: $(this).attr('action'),
				type: 'POST',
				data: $(this).serialize(),
				beforeSend: () => {
					const num = 0;
				},
				success: (data) => {
					const num = 0;
				},
			});
		});
		this.checkUpdate();
	}

	componentDidUpdate() {
		this.checkUpdate();
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

		return (
			<div className="overlay_top">
				<div id="backgroundOverlay" className="backgroundOverlay"></div>
				<div className="overlay_container">
					<a className="closebutton strokeme">✖</a>
					<div className="overlayform">
						<form id="emf-form" target="_self" className="topLabel" method="post" action="/postform">
							<div className="emf-head-widget">
								<h3>The Leo Signal</h3>
								<h4>Fill out the form below to get in contact with Me!</h4>
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
								</li>
								<li className="emf-field-email">
									<label className="emf-label-desc" htmlFor="element_7">Email <span>*</span></label>
									<div className="emf-div-field">
										<input id="element_7" name="Email" className="validate[required,custom[email]]" type="text"></input>
									</div>
								</li>
								<li className="emf-field-textarea">
									<label className="emf-label-desc" htmlFor="element_8">Message</label>
									<div className="emf-div-field"><textarea id="element_8" name="Message" cols="45" rows="10" className="validate[optional]"></textarea></div>
								</li>
								<li className="emf-li-post-button">
									<input value="Submit" type="submit"></input>
								</li>
							</ul>
							<input name="embed" value="form" type="hidden"></input>
							<input type="hidden" name="http_referer" value="http://www.leotide.com/"></input>
						</form>
					</div>
					<div className="overlayimagecontrol">
						{ Arrows() }
						<div className="img-wrap-overlay">
							<img alt="It's not loading!" className="overlayimage" src={this.props.overlay_image_src.toString()}></img>
						</div>
						<span className="overlaytext"></span>
					</div>
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
};

const mapStateToProps = state => ({
	overlay_image_src: state.overlay_image_src,
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
