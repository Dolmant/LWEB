import { createStore } from 'redux';
import { category, TOGGLE_SIDEBAR, isTouch, TOGGLE_OVERLAY, NumberofVertical, UPDATE_CATEGORY, UPDATE_INTROSTATE, UPDATE_OVERLAY_IMAGE, NAV_OVERLAY_IMAGE, projectList, NumberOfImages, getImageSrc, ArrayContains, ArrayLimits } from './../consts';
// reducer handles how the state updates

const InitalState = {
	category: category.PROJECTS,
	list: projectList.SCIENCE.concat(
		projectList.MODELLING.concat(
				projectList.ANIMALS.concat(
					projectList.FACTS.concat(
						projectList.SVSM.concat(
							projectList.TYPOGRAPHY.concat(
								projectList.MISC)))))),
	overlay_image: 1,
	overlay_vertical_index: 0,
	isTouch,
	introOn: !isTouch,
	sidebarOpen: false,
	overlay: {
		state: false,
		image: false,
		arrows: {
			left: true,
			right: true,
			up: false,
			down: false,
		},
	},
};

function computedarrows(overlay_image_num,
	current_category,
	overlay_vertical_index,
) {
	const overlayarrows = {};
	Object.assign(overlayarrows, InitalState.overlay.arrows);
	let leftlimits = ArrayLimits.left;
	let rightlimits = ArrayLimits.right;
	const downlimits = ArrayLimits.up;
	const uplimits = ArrayLimits.down;
	if (current_category === category.PROJECTS) {
		leftlimits = [1];
		rightlimits = [NumberOfImages];
	}
	if (ArrayContains(leftlimits, overlay_image_num)) {
		overlayarrows.left = false;
	}
	if (ArrayContains(rightlimits, overlay_image_num)) {
		overlayarrows.right = false;
	}
	// reversed logic here to make things easier
	if (ArrayContains(uplimits, overlay_image_num) &&
	(overlay_vertical_index !== NumberofVertical - 1)) {
		overlayarrows.up = true;
	}
	if (ArrayContains(downlimits, overlay_image_num) &&
	(overlay_vertical_index !== 0)) {
		overlayarrows.down = true;
	}
	return overlayarrows;
}

function selectedOverlayImageNum(overlay_image_num_ = InitalState.overlay_image,
	current_category = InitalState.category,
	overlay_vertical_index_ = InitalState.overlay_vertical_index,
	_overlay = InitalState.overlay,
	action,
) {
	let overlay_image_num = overlay_image_num_;
	let overlay_vertical_index = overlay_vertical_index_;
	let state = _overlay.state;
	let image = _overlay.image;
	switch (action.type) {
	case NAV_OVERLAY_IMAGE:
		switch (action.direction) {
		case 'left':
			overlay_image_num -= 1;
			break;
		case 'right':
			overlay_image_num += 1;
			break;
			// deal with this later
		case 'up':
			overlay_vertical_index += 1;
			break;
		case 'down':
			overlay_vertical_index -= 1;
			break;
		default:
			break;
		}
		break;
	case UPDATE_OVERLAY_IMAGE:
		overlay_image_num = action.index;
		break;
	case TOGGLE_OVERLAY:
		state = action.state;
		image = action.image;
		break;
	default:
		break;
	}
	const [temp_image, temp_thumb] = getImageSrc(overlay_image_num);
	let overlay_image_src = '';
	let overlay_thumb_src = '';
	if (Array.isArray(temp_image)) {
		overlay_image_src = temp_image[overlay_vertical_index];
		overlay_thumb_src = temp_thumb[overlay_vertical_index];
	} else {
		overlay_image_src = temp_image;
		overlay_thumb_src = temp_thumb;
	}
	const arrows = computedarrows(
		overlay_image_num,
		current_category,
		overlay_vertical_index);
	return {
		overlay_vertical_index,
		overlay_image_num,
		overlay_image_src,
		overlay_thumb_src,
		overlay: {
			arrows,
			state,
			image,
		},
	};
}

function selectedCategory(state = InitalState.category, action) {
	let selectedcat = state;
	if (action.type === UPDATE_CATEGORY) {
		selectedcat = action.category;
	}
	return selectedcat;
}

function selectedList(state = InitalState.list, action) {
	let list = state.slice();
	if (action.type === UPDATE_CATEGORY) {
		switch (action.category) {
		case 'ANIMALS':
			list = projectList.ANIMALS;
			break;
		case 'SCIENCE':
			list = projectList.SCIENCE.concat(projectList.MODELLING);
			break;
		case 'FACTS':
			list = projectList.FACTS;
			break;
		case 'TYPOGRAPHY':
			list = projectList.TYPOGRAPHY;
			break;
		case 'SVSM':
			list = projectList.SVSM;
			break;
		case 'MODELLING':
			list = projectList.MODELLING;
			break;
		case 'PROJECTS':
			list = InitalState.list;
			break;
		default:
			list = InitalState.list;
			break;
		}
		return list;
	}
	return list;
}

function introState(state = InitalState.introOn, action) {
	if (action.type === UPDATE_INTROSTATE) {
		return action.statebool;
	}
	return state;
}

function sidebarToggle(state = InitalState.sidebarOpen, action) {
	if (action.type === TOGGLE_SIDEBAR) {
		return !state;
	}
	return state;
}

// concatenate all the reducers

function allReducers(state = {}, action) {
	return {
		category: selectedCategory(state.category, action),
		list: selectedList(state.list, action),
		isTouch,
		introOn: introState(state.introOn, action),
		sidebarOpen: sidebarToggle(state.sidebarOpen, action),
		...selectedOverlayImageNum(state.overlay_image_num,
			state.category,
			state.overlay_vertical_index,
			state.overlay,
			action),
	};
}

// create store
export default createStore(allReducers);
