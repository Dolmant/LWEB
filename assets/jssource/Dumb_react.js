import React from 'react';

export const Intro = () => (
	<div>
		<div className="intro-logo" >
			<img alt="It's not loading!" src="./assets/images/LEOTIDE.png"></img>
		</div>
		<video className="introVideo" autoPlay="1" loop="">
			<source src="./assets/vids/Nucleus03.mp4" type="video/mp4"></source>
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
		<div className="sidebar-text">
			<img src="./assets/images/TextImage.png" alt="Not Loading!"></img>
		</div>
		<h3>COMMISSIONS</h3>
		<h4>Please use the &quot;Contact Me&quot; button in the bottom right of your screen to make an enquiry and ensure you at least include the following detail!</h4>
		<h4>Type of commission, for example:</h4>
		<ul>
			<li>
				<div className="sidebar-img-wrap">
					<img alt="Not Loading!" src="./assets/icons/rightarrow.png"></img>
				</div>
				<div>
					<h6>Scientific illustration</h6>
				</div>
			</li>
			<li>
				<div className="sidebar-img-wrap">
					<img alt="Not Loading!" src="./assets/icons/rightarrow.png"></img>
				</div>
				<div>
					<h6>Biomedical animation</h6>
				</div>
			</li>
			<li>
				<div className="sidebar-img-wrap">
					<img alt="Not Loading!" src="./assets/icons/rightarrow.png"></img>
				</div>
				<h6>General Sketch</h6>
			</li>
			<li>
				<div className="sidebar-img-wrap">
					<img alt="Not Loading!" src="./assets/icons/rightarrow.png"></img>
				</div>
				<h6>Detailed Sketch</h6>
			</li>
			<li>
				<div className="sidebar-img-wrap">
					<img alt="Not Loading!" src="./assets/icons/rightarrow.png"></img>
				</div>
				<h6>3D Model</h6>
			</li>
		</ul>
		<h4>Please add any other details you might require for your commission (e.g. subject matter, size, colours etc.). If there is a specific art style from one of my previous works that interests you please let me know!</h4>
	</div>
);
