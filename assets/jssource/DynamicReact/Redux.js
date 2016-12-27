import { createStore } from 'redux';
import { category, NumberofVertical, UPDATE_CATEGORY, UPDATE_OVERLAY_IMAGE, NAV_OVERLAY_IMAGE, projectList, NumberOfImages, getImageSrc, ArrayContains, ArrayLimits } from './../consts';
// reducer handles how the state updates

const InitalState = {
	category: category.PROJECTS,
	list: projectList.SCIENCE.concat(
		projectList.MODELLING.concat(
				projectList.ANIMALS.concat(
					projectList.FACTS.concat(
						projectList.MISC)))),
	overlay_image: 1,
	arrows: {
		left: true,
		right: true,
		up: false,
		down: false,
	},
	overlay_vertical_index: 0,
};

function computedarrows(overlay_image_num,
	current_category,
	overlay_vertical_index,
) {
	const overlayarrows = {};
	Object.assign(overlayarrows, InitalState.arrows);
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
	action,
) {
	let overlay_image_num = overlay_image_num_;
	let overlay_vertical_index = overlay_vertical_index_;
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
	default:
		break;
	}
	const temp = getImageSrc(overlay_image_num);
	let overlay_image_src = '';
	if (Array.isArray(temp)) {
		overlay_image_src = temp[overlay_vertical_index];
	} else {
		overlay_image_src = temp;
	}
	const overlayarrows = computedarrows(
		overlay_image_num,
		current_category,
		overlay_vertical_index);
	return {
		overlay_vertical_index,
		overlay_image_num,
		overlay_image_src,
		overlayarrows,
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
			list = projectList.SCIENCE;
			break;
		case 'FACTS':
			list = projectList.FACTS;
			break;
		case 'PROJECTS':
			list = projectList.SCIENCE.concat(
				projectList.MODELLING.concat(
						projectList.ANIMALS.concat(
							projectList.FACTS.concat(
								projectList.MISC))));
			break;
		default:
			list = projectList.SCIENCE.concat(
				projectList.MODELLING.concat(
						projectList.ANIMALS.concat(
							projectList.FACTS.concat(
								projectList.MISC))));
			break;
		}
		return list;
	}
	return list;
}

function allReducers(state = {}, action) {
	return {
		category: selectedCategory(state.category, action),
		list: selectedList(state.list, action),
		...selectedOverlayImageNum(state.overlay_image_num,
			state.category,
			state.overlay_vertical_index, action),
	};
}

// create store
export default createStore(allReducers);
