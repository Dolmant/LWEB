import { createStore } from 'redux';
import { category, UPDATE_CATEGORY, projectList } from './../consts';
// reducer handles how the state updates

function initalState() {
	return {
		category: category.PROJECTS,
		list: projectList.ANIMALS.concat(
			projectList.SCIENCE.concat(
				projectList.FACTS.concat(projectList.MODELLING))),
	};
}

function projectswitcher(state = initalState(), action) {
	let list = [];
	switch (action.type) {
	case UPDATE_CATEGORY:
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
		return Object.assign({}, state, {
			category: action.category,
			list,
		});
	default:
		return state;
	}
}

// create store

export default createStore(projectswitcher);
