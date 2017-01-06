import store from './DynamicReact/Redux';
import $ from './jquery.min';
import { scrollPoint, updateIntroState } from './consts';

export default function animateScroll(delay) {
	$('.introVideo').get(0).pause();
	$('.intro').addClass('animateHeight');
	setTimeout(() => {
		$(window).scrollTop($(window).scrollTop() - scrollPoint);
		store.dispatch(updateIntroState(false));
		$('.intro').removeClass('animateHeight');
	}, delay);
}
