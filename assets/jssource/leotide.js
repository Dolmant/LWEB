import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Sidebar from './DynamicReact/Sidebar';
import IntroController from './DynamicReact/IntroController';
import IntroHeader from './DynamicReact/IntroHeader';
import Filters from './DynamicReact/Filters';
import OverlayController from './DynamicReact/OverlayController';
import PageContainer from './DynamicReact/PageContainer';
import Footer from './DynamicReact/Footer';
import store from './DynamicReact/Redux';
import $ from './jquery.min';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
const HT = {
	ready() {
		$(window).load(() => {
			setTimeout(() => {
				$('body').show();
				$('html').removeClass('loading');
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
			<IntroController />
		</Provider>,
		document.getElementById('intro'));
	ReactDOM.render(
		<Provider store={store}>
			<IntroHeader />
		</Provider>,
		document.getElementById('introHeader'));
	ReactDOM.render(
		<Provider store={store}>
			<MuiThemeProvider>
				<Filters />
			</MuiThemeProvider>
		</Provider>,
		document.getElementById('filters'));
	ReactDOM.render(
		<Provider store={store}>
			<OverlayController />
		</Provider>,
		document.getElementById('overlay'));
	ReactDOM.render(
		<Provider store={store}>
			<Sidebar />
		</Provider>,
		document.getElementById('sidebar-top'));
	ReactDOM.render(
		<Provider store={store}>
			<PageContainer />
		</Provider>,
	document.getElementById('page-container'));
	ReactDOM.render(
		<Provider store={store}>
			<Footer />
		</Provider>,
		document.getElementById('footer'));
	HT.ready();
});

$(window).resize(() => {
	HT.resize();
});
