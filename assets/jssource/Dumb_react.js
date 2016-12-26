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
