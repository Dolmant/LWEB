import store from './DynamicReact/Redux';
import $ from './jquery.min';
import { scrollPoint } from './consts';
import { updateIntroState } from './DynamicReact/Actions';

export default function animateScroll(delay) {
	//$('.introVideo').get(0).pause();
	$('.intro').addClass('animateHeight');
	setTimeout(() => {
		$('.intro').removeClass('animateHeight');
		store.dispatch(updateIntroState(false));
		$(window).scrollTop($(window).scrollTop() - scrollPoint);
	}, delay);
}
