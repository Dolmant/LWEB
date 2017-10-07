import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import store from './DynamicReact/Redux';
import $ from './jquery.min';
import App from './App';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
const HT = {
	ready() {
		$(window).load(() => {
			setTimeout(() => {
				$('body').show();
				$('html').removeClass('loading');
				particlesJS.load('introImage', './assets/particles.json', function() {
					console.log('callback - particles.js config loaded');
				  });
			}, 100);
		});
	},

	resize() {
		if ($(window).scrollTop() === 0) {
			$('.intro-logo').css({ top: (($(window).height() / 2) - 21) });
		}
	},
};

$(document).ready(() => {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('app'));
	HT.ready();
});

$(window).resize(() => {
	HT.resize();
});
