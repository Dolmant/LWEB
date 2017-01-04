import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Sidebar } from './Dumb_react';
import IntroController from './DynamicReact/IntroController';
import IntroHeader from './DynamicReact/IntroHeader';
import Filters from './DynamicReact/Filters';
import Overlay from './DynamicReact/Overlay';
import PageContainer from './DynamicReact/PageContainer';
import Footer from './DynamicReact/Footer';
import store from './DynamicReact/Redux';
import $ from './jquery.min';

const HT = {
	ready() {
		HT.fajax();
	},

	resize() {
		if ($(window).scrollTop() === 0) {
			$('.intro-logo').css({ top: (($(window).height() / 2) - 21) });
		}
	},

	checkPosts() {
		const docViewTop = $(window).scrollTop();
		const docViewBottom = docViewTop + $(window).height();
		const elemTop = $('.posts-loader').offset().top;
		const elemBottom = elemTop + $('.posts-loader').height();

		if ((elemBottom <= docViewBottom) && (elemTop - 100 >= docViewTop) && $('.posts-loader').hasClass('inactive')) {
			$('.posts-loader').addClass('active').removeClass('inactive');
			HT.loadPosts();
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

		$.ajax({
			url: '/assets/includes/posts.php',
			data: dataString,
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
			},
		});
	},

	fajax() {
		$('body').hide();

		$(window).load(() => {
			setTimeout(() => {
				$('html').removeClass('loaded');
				$('body').show();
			}, 550);
		});
	},

	newsletter() {
		$('#newsForm').submit(function (e) {
			e.preventDefault();
			const form = $(this);
			$.ajax({
				url: '/assets/includes/newsletter.php',
				data: form.serialize(),
				beforeSend() {
				},
				success(response) {
					var resp = $.parseJSON(response);
					form.find('input[type=text]').val(resp.msg);
					if (resp.msg !== 'Thanks!') {
						form.find('input[type=text]').addClass('err');
					}
				},
			});
		});
	},
};

$(document).ready(() => {
	ReactDOM.render(
		<Provider store={store}>
			<IntroController />
		</Provider>, document.getElementById('intro'));
	ReactDOM.render(<IntroHeader />, document.getElementById('introHeader'));
	ReactDOM.render(
		<Provider store={store}>
			<Filters />
		</Provider>,
		document.getElementById('filters'));
	ReactDOM.render(
		<Provider store={store}>
			<Overlay />
		</Provider>,
		document.getElementById('overlay'));
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
	HT.ready();
});

$(window).resize(() => {
	HT.resize();
});
