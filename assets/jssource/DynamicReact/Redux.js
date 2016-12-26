import { createStore } from 'redux';
import { category, UPDATE_CATEGORY, UPDATE_OVERLAY_IMAGE, NAV_OVERLAY_IMAGE, projectList, NumberOfImages, getImageSrc } from './../consts';
// reducer handles how the state updates

const InitalState = {
	category: category.PROJECTS,
	list: projectList.ANIMALS.concat(
		projectList.SCIENCE.concat(
				projectList.FACTS.concat(projectList.MODELLING))),
	overlay_image: 1,
};

function selectedOverlayImageNum(state = InitalState.overlay_image, action) {
	let overlay_image_num = state;
	switch (action.type) {
	case NAV_OVERLAY_IMAGE:
		switch (action.direction) {
		case 'left':
			if (overlay_image_num === 1) {
				overlay_image_num = NumberOfImages;
			} else {
				overlay_image_num -= 1;
			}
			break;
		case 'right':
			if (overlay_image_num === NumberOfImages) {
				overlay_image_num = 1;
			} else {
				overlay_image_num += 1;
			}
			break;
			// deal with this later
		case 'up':
			if (overlay_image_num === 1) {
				overlay_image_num = NumberOfImages;
			} else {
				overlay_image_num -= 1;
			}
			break;
		case 'down':
			if (overlay_image_num === 1) {
				overlay_image_num = NumberOfImages;
			} else {
				overlay_image_num -= 1;
			}
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
	const overlay_image_src = getImageSrc(overlay_image_num);
	return {
		overlay_image_num,
		overlay_image_src,
	};
}

function selectedCategory(state = InitalState.category, action) {
	let selectedcat = state;
	if (action.type === UPDATE_CATEGORY) {
		selectedcat = action.category;
	}
	return {
		selectedcat,
	};
}

function selectedList(state = InitalState.list, action) {
	let list = state;
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
			list = projectList.ANIMALS.concat(
				projectList.SCIENCE.concat(
					projectList.FACTS.concat(
						projectList.MODELLING)));
			break;
		default:
			list = projectList.ANIMALS.concat(
				projectList.SCIENCE.concat(
					projectList.FACTS.concat(
						projectList.MODELLING)));
			break;
		}
		return {
			list,
		};
	}
	return list;
}

function allReducers(state = {}, action) {
	return {
		category: selectedCategory(state.category, action),
		list: selectedList(state.list, action),
		...selectedOverlayImageNum(state.overlay_image_num, action),
	};
}

// create store
export default createStore(allReducers);
