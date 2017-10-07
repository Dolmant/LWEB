import store from './DynamicReact/Redux';
import $ from './jquery.min';
import { scrollPoint, updateIntroState } from './consts';

export default function animateScroll(delay) {
	//$('.introVideo').get(0).pause();
	$('.intro').addClass('animateHeight');
	setTimeout(() => {
		$('.intro').removeClass('animateHeight');
		store.dispatch(updateIntroState(false));
		$(window).scrollTop($(window).scrollTop() - scrollPoint);
	}, delay);
}
