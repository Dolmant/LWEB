import React from 'react';


class Overlay extends React.Component {
	render() {
		const inputStyle = {
			width: '49.5%',
		};
		const spanStyle = {
			width: '49.5%',
		};
		const displayStyle = {
			display: 'none',
		};
		function OnMouseEventtrigger() {
			return true;
		}
		return (
			<div className="overlay_container">
				<form id="emf-form" target="_self" className="topLabel" method="post" action="https://www.emailmeform.com/builder/form/h7V7fqvRe1wkf7L08m46Xaddr">
					<div id="emf-form-instruction" className="emf-head-widget">
						<div id="emf-form-title" className="emf-bold">Contact EmailMeForm</div>
						<div id="emf-form-description">Fill out the form below to know more on how you can get these stunning themes on your forms &amp; surveys.</div>
					</div>
					<ul>
						<li id="emf-li-0" className="emf-li-field emf-field-new_name data_container   cell_align_left">
							<label className="emf-label-desc" htmlFor="element_0">Name <span>*</span></label>
							<div className="emf-div-field">
								<span style={spanStyle}>
									<input className="validate[required]" style={inputStyle} value="" id="element_2" name="element_2" type="text"></input>
									<label htmlFor="element_2" className="emf-bottom-label emf-text-center">First</label>
								</span>
								<span style={spanStyle}>
									<input className="validate[required]" style={inputStyle} value="" id="element_3" name="element_3" type="text"></input>
									<label htmlFor="element_3" className="emf-bottom-label emf-text-center">Last</label>
								</span>
							</div>
							<div className="emf-clear"></div>
						</li>
						<li id="emf-li-7" className="emf-li-field emf-field-email data_container   ">
							<label className="emf-label-desc" htmlFor="element_7">Email <span>*</span></label>
							<div className="emf-div-field">
								<input id="element_7" name="element_7" className="validate[required,custom[email]]" value="" style={inputStyle} type="text"></input>
							</div>
							<div className="emf-clear"></div>
						</li>
						<li id="emf-li-8" className="emf-li-field emf-field-textarea data_container   ">
							<label className="emf-label-desc" htmlFor="element_8">Message</label>
							<div className="emf-div-field"><textarea id="element_8" name="element_8" cols="45" rows="10" className="validate[optional]"></textarea></div>
							<div className="emf-clear"></div>
						</li>
						<li id="emf-li-recaptcha" style={displayStyle}>

						</li>
						<li id="emf-li-post-button" className="middle">
							<input value="Submit" type="submit" onMouseOver={OnMouseEventtrigger}></input>
						</li>
					</ul>
					<input name="element_counts" value="9" type="hidden"></input>
					<input name="embed" value="form" type="hidden"></input>
					<input type="hidden" name="http_referer" value="http://www.emailmeform.com/"></input>
					<input type="hidden" name="javascript_executed" value="true"></input>
				</form>
			</div>
		);
	}
}

export default Overlay;
