import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Sidebar from './DynamicReact/Sidebar';
import IntroController from './DynamicReact/IntroController';
import IntroHeader from './DynamicReact/IntroHeader';
import Filters from './DynamicReact/Filters';
import OverlayController from './DynamicReact/OverlayController';
import PageContainer from './DynamicReact/PageContainer';
import Footer from './DynamicReact/Footer';
import store from './DynamicReact/Redux';
import $ from './jquery.min';

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

	loadPosts() {
		const postContainer = $('.posts');
		const page = parseInt(postContainer.data('p'), 10) + 1;
		let	dataString = 'p=' + page + '&';
		const cat = postContainer.data('cat');
		if (postContainer.data('cat')) {
			dataString += 'cat=' + cat;
		}
		const form = $(this);
		$.ajax({
			url: '/assets/includes/posts.php',
			data: form.serialize(),
			dataType: 'html',
			beforeSend() {
				$('.posts-loader').addClass('loading');
			},
			success(response) {
				if (response.indexOf('post') >= 0) {
					postContainer.append(response);
					postContainer.data('p', page);
					$('.posts-loader').removeClass('loading').removeClass('active').addClass('inactive');
				} else {
					$('.posts-loader').remove();
				}
				var resp = $.parseJSON(response);
				form.find('input[type=text]').val(resp.msg);
				if (resp.msg !== 'Thanks!') {
					form.find('input[type=text]').addClass('err');
				}
			},
		});
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
			<Filters />
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
