import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import { HomeInitial, category, isTouch, projectList, getImageById, ArrayLimitsCalc } from './../consts';
import { TOGGLE_TOUCHMENU, TOGGLE_SIDEBAR, SELECT_PAGE, TOGGLE_OVERLAY, UPDATE_CATEGORY, UPDATE_INTROSTATE, UPDATE_OVERLAY_IMAGE, NAV_OVERLAY_IMAGE } from './Actions';
import CartManagementReducer from './../Shop/CartManagement/CartManagementReducers';
import CombinedCheckoutReducer from './../Shop/Checkout/CheckoutReducers';
import CombinedPostageCalculatorReducer from './../Shop/PostageCalculator/PostageCalculatorReducers';
// reducer handles how the state updates


const initial_category = () => {
	if (Object.keys(category).includes('ALL')) {
		return 'ALL';
	}
	return Object.keys(category)[0];
};

const InitalState = {
	category: initial_category(),
    page: 'home',
    shoppingCart: [],
    checkout: {
        loading: false,
        checkoutResult: {},
    },
    postageCalculator: {
        loading: false,
        postageResult: {},
    },
	list: HomeInitial,
	overlay_image: 1,
	overlay_vertical_index: {},
	isTouch,
	touchmenu_active: false,
	introOn: true,
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
    NumberofVertical
) {
	const ArrayLimits = ArrayLimitsCalc(current_category);
	const overlayarrows = {};
	Object.assign(overlayarrows, InitalState.overlay.arrows);
	const leftlimits = ArrayLimits.left;
	const rightlimits = ArrayLimits.right;
	const downlimits = ArrayLimits.up;
	const uplimits = ArrayLimits.down;
	if (leftlimits.includes(overlay_image_num)) {
		overlayarrows.left = false;
	}
	if (rightlimits.includes(overlay_image_num)) {
		overlayarrows.right = false;
	}
	// reversed logic here to make things easier
	if (overlay_vertical_index[overlay_image_num] < NumberofVertical - 1) {
		overlayarrows.up = true;
	}
	if (overlay_vertical_index[overlay_image_num] > 0) {
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
	if (!current_category) {
		return {
			overlay: _overlay,
			overlay_vertical_index: overlay_vertical_index_,
			overlay_image: overlay_image_num_,
		}
	}
	let overlay_image_num = overlay_image_num_;
    let overlay_vertical_index = overlay_vertical_index_;
    if (!overlay_vertical_index[overlay_image_num]) {
        overlay_vertical_index[overlay_image_num] = 0;
    }
	let state = _overlay.state;
	let image = _overlay.image;
	switch (action.type) {
	case NAV_OVERLAY_IMAGE:
		switch (action.payload) {
		case 'left':
			overlay_image_num -= 1;
			break;
		case 'right':
			overlay_image_num += 1;
			break;
		case 'up':
			overlay_vertical_index[overlay_image_num] += 1;
			break;
		case 'down':
			overlay_vertical_index[overlay_image_num] -= 1;
			break;
		default:
			break;
		}
		break;
	case UPDATE_OVERLAY_IMAGE:
		overlay_image_num = action.payload;
		break;
	case TOGGLE_OVERLAY:
		state = action.payload.state;
		image = action.payload.image;
		break;
	default:
		break;
    }
    // need to check again because it can be changed above
    if (!overlay_vertical_index[overlay_image_num]) {
        overlay_vertical_index[overlay_image_num] = 0;
    }
	const temp_image_data = getImageById(overlay_image_num);
	let overlay_image_src = '';
    let overlay_thumb_src = '';
	let vertical_limit = 0;
	const is_video = temp_image_data.is_video;
	if (Array.isArray(temp_image_data.img_src)) {
		overlay_image_src = temp_image_data.img_src[overlay_vertical_index[overlay_image_num]];
        overlay_thumb_src = temp_image_data.overlay_thumbs_src[overlay_vertical_index[overlay_image_num]];
        vertical_limit = temp_image_data.img_src.length;
	} else {
		overlay_image_src = temp_image_data.img_src;
		overlay_thumb_src = temp_image_data.thumbs_src;
	}
	const arrows = computedarrows(
		overlay_image_num,
		current_category,
        overlay_vertical_index,
        vertical_limit);
	return {
		overlay_vertical_index,
		overlay_image_num,
		overlay_image_src,
        overlay_thumb_src,
        overlay_types: temp_image_data.types,
        overlay_txt: temp_image_data.img_txt,
		overlay: {
			arrows,
			state,
			image,
			is_video,
		},
	};
}

function selectedCategory(state = InitalState.category, action) {
	let selectedcat = state;
	if (action.type === UPDATE_CATEGORY) {
		selectedcat = action.payload;
	}
	return selectedcat;
}

function selectedList(state = InitalState.list, action) {
	let list;
	if (action.type === UPDATE_CATEGORY) {
		if (Object.keys(projectList).includes(action.payload)) {
			list = projectList[action.payload];
		} else {
			// Home list
			list = InitalState.list;
		}
		return list;
	}
	return state;
}

function introState(state = InitalState.introOn, action) {
	if (action.type === UPDATE_INTROSTATE) {
		return action.payload;
	}
	return state;
}

function sidebarToggle(state = InitalState.sidebarOpen, action) {
	if (action.type === TOGGLE_SIDEBAR) {
		return !state;
	}
	return state;
}

function touchmenuToggle(state = InitalState.touchmenu_active, action) {
	if (action.type === TOGGLE_TOUCHMENU) {
		return !state;
	}
	return state;
}

function selectPage(state = InitalState.page, action) {
	if (action.type === SELECT_PAGE) {
		return action.payload;
	}
	if (action.type === UPDATE_CATEGORY) {
		return 'portfolio';
	}
	return state;
}

// concatenate all the reducers

function allReducers(state = {}, action) {
	return {
		category: selectedCategory(state.category, action),
		list: selectedList(state.list, action),
		isTouch,
		page: selectPage(state.page, action),
		touchmenu_active: touchmenuToggle(state.touchmenu_active, action),
		introOn: introState(state.introOn, action),
        sidebarOpen: sidebarToggle(state.sidebarOpen, action),
        shoppingCart: CartManagementReducer(state.shoppingCart, action),
        checkout: CombinedCheckoutReducer(state.checkout, action),
        postageCalculator: CombinedPostageCalculatorReducer(state.postageCalculator, action),
		...selectedOverlayImageNum(state.overlay_image_num,
			state.category,
			state.overlay_vertical_index,
			state.overlay,
			action),
	};
}

const loggerMiddleware = createLogger();

// create store
export default createStore(
	allReducers,
    applyMiddleware(
		thunkMiddleware, // lets us dispatch() functions
		loggerMiddleware,
	),
);
