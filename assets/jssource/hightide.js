import * as projectSeparate from './project_separate';
import $ from './jquery.min';

const HT = {
	isTouch() {
		return 'ontouchstart' in document.documentElement;
	},
	ready() {
		HT.fajax();
		HT.overlay();
		HT.sidebar();
		HT.newsletter();
		// if ($('.intro').length) {
		// 	if ($(window).width() && !HT.isTouch()) { // HANDLE FULL BLEED VIDEO
		// 		HT.intro.setup();
		// 	} else {
		// 		$('.intro').remove();
		// 		$('header').removeClass('introHeader');
		// 	}
		// }
		if ($('body.home').length) {
			return undefined;
		}
		if ($('body.project').length) {
			return undefined;
		}
	},
	intro: {
		scrollPoint: 0,
		on: false,
		setup() {
			$('.intro').show();
			$(window).scrollTop(0);
			$('footer').addClass('introStatic');
			$('body').css('padding-top', `${$(window).height()}px`);
			$('.page.container').addClass('noPad');
			HT.intro.scrollPoint = $(window).height();
			HT.intro.on = true;
			$('.intro-logo').css({ top: ((HT.intro.scrollPoint / 2) - 21) });
			$('.intro .intro-logo img').click(() => {
				$('html, body').animate({ scrollTop: HT.intro.scrollPoint - 65 }, 1000);
			});
			$('.introVideo').css({ 'min-height': $(window).height() });
		},
		close() {
			HT.intro.on = false;
			$('.intro').remove();
			$('.page.container').removeClass('noPad');
			$('body').css({ 'padding-top': 0 });
			$('header').removeClass('introHeader');
			$('footer').removeClass('introStatic');
			$(window).scrollTop(0);
			const num = 0;
			setTimeout(() => {
				$('.filters').toggleClass('open');
			}, num);
			$('header a').addClass('scrolled');
		},
		parallax() {
			if ($(window).scrollTop() < HT.intro.scrollPoint) {
				$('.introVideo').css({ top: ($(window).scrollTop() / -3) });
			}
		},
		logoScroll() {
			const top = ((HT.intro.scrollPoint / 2) - 21);
			$('.intro-logo').css({ top: (top - $(window).scrollTop()) });
		},
		scroll() {
			HT.intro.parallax();
			HT.intro.logoScroll();
			if ($(window).scrollTop() < HT.intro.scrollPoint) {
				$('.intro').css({ height: HT.intro.scrollPoint - $(window).scrollTop() });
			}
		},
		resize() {
			if ($(window).scrollTop() === 0) {
				$('.intro-logo').css({ top: (($(window).height() / 2) - 21) });
			}
		},
	},

	scroll() {
		if ($('body.journal') && $('.posts-loader').length) {
			HT.checkPosts();
		}
		if (HT.intro.on) {
			HT.intro.scroll();
			if ($(window).scrollTop() >= HT.intro.scrollPoint - 65) {
				HT.intro.close();
			}
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

	scrollbarWidth() {
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

		$('#emf-form').on('submit', function formoverride(e) {
			e.preventDefault();
			projectSeparate.toggleOverlay(false, false);
			$.ajax({
				url: $(this).attr('action'),
				type: 'POST',
				data: $(this).serialize(),
				beforeSend: () => {
					const num = 0;
				},
				success: (data) => {
					const num = 0;
				},
			});
		});
		$('.closebutton').click((event) => {
			event.preventDefault();
			projectSeparate.toggleOverlay(false, false);
		});
	},

	overlay() {
		projectSeparate.toggleOverlay(false, false);
	},

	sidebar() {
		const sidebar = $('.sidebar');
		$('header .about-me').click(() => {
			if (!$('header').hasClass('introHeader')) {
				if (parseInt($('footer').css('padding-right'), 10) > 0) {
					$('footer, header, body, .filters.open').css('padding-right', 0);
					$('.overlay, header, footer').unbind('touchmove', (e) => {
						e.preventDefault();
					});
				} else {
					$('footer, header, body, .filters.open').css('padding-right', HT.scrollbarWidth);
					$('.overlay, header, footer').bind('touchmove', (e) => {
						e.preventDefault();
					});
				}
				sidebar.toggleClass('active');
				$('html').toggleClass('sidebar-open');
			}
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
	projectSeparate.renderhtml();
	HT.ready();
});

// $(document).scroll(() => {
// 	HT.scroll();
// });

$(window).resize(() => {
	HT.intro.resize();
});
