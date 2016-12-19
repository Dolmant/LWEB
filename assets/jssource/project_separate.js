import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Intro, IntroHeader, Overlay, Sidebar } from './Dumb_react';
import $ from './jquery.min';
import Filters from './DynamicReact/Filters';
import PageContainer from './DynamicReact/PageContainer';
import Footer from './DynamicReact/Footer';
import store from './DynamicReact/Redux';

export function toggleOverlay(state, image, src) {
	const overlay = $('.overlay');
	if (state) {
		overlay.addClass('active');
		$('html').addClass('overlay-open');
		$('.backgroundOverlay').show();
		$('.backgroundOverlay').click((event) => {
			if (!$(event.target).is('.overlay_container'))	{
				toggleOverlay(false, false, false);
			}
		});
	} else {
		overlay.removeClass('active');
		$('html').removeClass('overlay-open');
		$('.backgroundOverlay').hide();
	}
	if (image) {
		$('.overlayimage').attr({ src });
		$('.overlayimagecontrol').show();
		$('.overlayform').hide();
	} else {
		$('.overlayimagecontrol').hide();
		$('.overlayform').show();
	}
}

export function renderhtml() {
	ReactDOM.render(<Intro />, document.getElementById('intro'));
	ReactDOM.render(<IntroHeader />, document.getElementById('introHeader'));
	ReactDOM.render(
		<Provider store={store}>
			<Filters />
		</Provider>,
		document.getElementById('filters'));
	ReactDOM.render(<Overlay />, document.getElementById('overlay'));
	ReactDOM.render(<Sidebar />, document.getElementById('sidebar'));
	ReactDOM.render(
		<Provider store={store}>
			<PageContainer />
		</Provider>,
	document.getElementById('page-container'));
	ReactDOM.render(
		<Provider store={store}>
			<Footer />
		</Provider>,
		document.getElementById('introStatic'));
}
