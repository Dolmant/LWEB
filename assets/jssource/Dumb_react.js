import React from 'react';

export const Intro = () => (
	<div>
		<div className="intro-logo" >
			<img alt="It's not loading!" src="./assets/images/LEOTIDE.png"></img>
		</div>
		<video className="introVideo" autoPlay="1" loop="">
			<source src="./assets/vids/Nucleus03.mov" type="video/mp4"></source>
		</video>
	</div>
);

export const IntroHeader = () => (
	<div className="container">
		<div className="left">
			<a className="fade" href="http://leotide.tumblr.com/">Tumblr!</a>
		</div>
		<h1>
			<img src="./assets/images/LEOTIDErev.png" alt="LeoTide"></img>
		</h1>
		<div className="right">
			<a className="about-me">About Leo</a>
		</div>
	</div>
);

export const Sidebar = () => (
	<div>
		<p>Hello!</p>
		<p>I am a multidisciplinary, multitalented and multi-limbed Masters student from the University of Technology Sydney engaging in both science research and design in biomedical animation whilst following my passion as a freelance scientific illustrator. Feel free to drop me a message and say hello!</p>
		<p>COMMISSIONS</p>
		<p>Please follow the instructions below!</p>
		<p>Type of commission:</p>
		<p>Scientific illustration</p>
		<p>Biomedical animation</p>
		<p>General illustration </p>
		<p>General animation </p>
		<p>Please add any details you might require for your commission (e.g. subject matter, size, colour image or sketch etc.). For illustrations, if there is a specific art style from one of my previous works that interests you please let me know!</p>
		<p></p>
		<p>Please be aware an extra 25% of the total fee will be charged upon cancellation</p>
	</div>
);

export const Overlay = () => (
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
				<div className="img-wrap">
					<img alt="It's not loading!" className="overlayimage"></img>
				</div>
				<span className="overlaytext"></span>
			</div>
		</div>
	</div>
);
