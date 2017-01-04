import React from 'react';
import $ from './../jquery.min';

class IntroHeader extends React.Component {
	static scrollbarWidth() {
		let parent;
		let child;
		let width;
		if (width === undefined) {
			parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body');
			child = parent.children();
			width = child.innerWidth() - child.height(99).innerWidth();
			parent.remove();
		}
		return width;
	}

	componentDidMount() {
		const sidebar = $('.sidebar');
		$('header .about-me').click(() => {
			if (!$('header').hasClass('introHeader')) {
				if (parseInt($('footer').css('padding-right'), 10) > 0) {
					$('footer, header, body, .filters.open').css('padding-right', 0);
					$('.overlay, header, footer').unbind('touchmove', (e) => {
						e.preventDefault();
					});
				} else {
					$('footer, header, body, .filters.open').css('padding-right', IntroHeader.scrollbarWidth);
					$('.overlay, header, footer').bind('touchmove', (e) => {
						e.preventDefault();
					});
				}
				sidebar.toggleClass('active');
				$('html').toggleClass('sidebar-open');
			}
		});
	}

	render() {
		return (
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
	}
}

export default IntroHeader;
