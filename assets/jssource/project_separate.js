import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import Overlay from './contact_overlay';
import $ from './jquery.min';


// actions you can send to the state:
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export function updatecat(category) {
	return { type: UPDATE_CATEGORY, category };
}

export const projectList = {
	ANIMALS: [
		{
			item_number: 1,
			img_src: './assets/images/Animals/Binturong.jpg',
			img_txt: 'Binturong',
		},
		{
			item_number: 2,
			img_src: './assets/images/Animals/BlackBear.jpg',
			img_txt: 'BlackBear',
		},
		{
			item_number: 3,
			img_src: './assets/images/Animals/RedPanda.jpg',
			img_txt: 'RedPanda',
		},
		{
			item_number: 4,
			img_src: './assets/images/Insects/DragonflySigned.jpg',
			img_txt: 'Dragonfly',
		},
	],
	SCIENCE: [
		{
			item_number: 5,
			img_src: './assets/images/Science/mouse02 copy.png',
			img_txt: 'Mice',
		},
		{
			item_number: 6,
			img_src: './assets/images/Science/3D/06_Cell_Internal.png',
			img_txt: '3D Cell internals',
		},
		{
			item_number: 7,
			img_src: './assets/images/Science/Medical Illustration/CatAnatomy2.jpg',
			img_txt: 'Cat Anatomy',
		},
		{
			item_number: 8,
			img_src: './assets/images/Science/Medical Illustration/COPD2_sign.jpg',
			img_txt: 'COPD2',
		},
		{
			item_number: 9,
			img_src: './assets/images/Science/Medical Illustration/Hand_Anatomy02.png',
			img_txt: 'Hand Anatomy',
		},
		{
			item_number: 10,
			img_src: './assets/images/Science/Medical Illustration/StomachLayers_01.jpg',
			img_txt: 'Stomach Layers',
		},
		{
			item_number: 11,
			img_src: './assets/images/Science/Typography/Blood_Components2.jpg',
			img_txt: 'Blood Components',
		},
		{
			item_number: 12,
			img_src: './assets/images/Science/Typography/Micro2.jpg',
			img_txt: 'Micro',
		},
		{
			item_number: 13,
			img_src: './assets/images/Science/Typography/Neuroscience.jpg',
			img_txt: 'Neruoscience',
		},
		{
			item_number: 14,
			img_src: './assets/images/Science/Typography/Proteomics_Typo_02.jpg',
			img_txt: 'Proteomics',
		},
		{
			item_number: 15,
			img_src: './assets/images/Science/VizbiPlus/08_Vizbi_DataTransfer.jpg',
			img_txt: 'Data Transfer',
		},
		{
			item_number: 16,
			img_src: './assets/images/Science/VizbiPlus/09_Vizbi_WINNER_FibrilForest.jpg',
			img_txt: 'Fibril Forest',
		},
		{
			item_number: 17,
			img_src: './assets/images/Science/VizbiPlus/FriesWithThat3.png',
			img_txt: 'Fries with that?',
		},
	],
	INSECTS: [
		{
			item_number: 18,
			img_src: './assets/images/Animals/Binturong.jpg',
			img_txt: 'Binturong',
		},
		{
			item_number: 19,
			img_src: './assets/images/Animals/Binturong.jpg',
			img_txt: 'Binturong',
		},
		{
			item_number: 20,
			img_src: './assets/images/Animals/Binturong.jpg',
			img_txt: 'Binturong',
		},
	],
	FACTS: [
		{
			item_number: 21,
			img_src: './assets/images/Animals/Binturong.jpg',
			img_txt: 'Binturong',
		},
		{
			item_number: 22,
			img_src: './assets/images/Animals/Binturong.jpg',
			img_txt: 'Binturong',
		},
		{
			item_number: 23,
			img_src: './assets/images/Animals/Binturong.jpg',
			img_txt: 'Binturong',
		},
	],
};

export const category = {
	PROJECTS: 'PROJECTS',
	ANIMALS: 'ANIMALS',
	INSECTS: 'INSECTS',
	SCIENCE: 'SCIENCE',
	FACTS: 'FACTS',
};

class Intro extends React.Component {
	render() {
		return (
			<div>
				<div className="intro-logo" >
					<img src="./assets/images/bigderp.png"></img>
				</div>
				<video className="introVideo" autoPlay="" loop="">
					<source src="http://hightide.vaesite.net/__data/c2a165d9d5bfafc75d164f1cc461086f.mp4" type="video/mp4"></source>
					<source src="http://hightide.vaesite.net/__data/ebb929a4ee2f8e8409f503dab0d8e4e7.ogv" type="video/ogg"></source>
				</video>
			</div>
		);
	}
}

class IntroHeader extends React.Component {
	render() {
		return (
			<div className="container">
				<h1>
					<a className="fade" href="http://derpspace.usite.pro/Lweb.html">
						<img src="./assets/images/logo2.png" alt="High Tide"></img>
					</a>
				</h1>
				<div className="left">
					<a className="fade" href="http://leotide.tumblr.com/">Tumblr!</a>
				</div>
				<div className="right">
					<div className="about-me">About Leo</div>
				</div>
			</div>
		);
	}
}

class Filters extends React.Component {
	render() {
		return (
			<div className="container">
				<ul>
					<li><a onClick={() => this.props.oncatClick('PROJECTS')} id="projects">Leo&apos;s Projects</a></li>
					<li><a onClick={() => this.props.oncatClick('ANIMALS')} id="animals">Leo&apos;s Animals</a></li>
					<li><a onClick={() => this.props.oncatClick('INSECTS')} id="insects">Leo&apos;s Insects</a></li>
					<li><a onClick={() => this.props.oncatClick('SCIENCE')} id="science">Leo&apos;s Science</a></li>
					<li><a onClick={() => this.props.oncatClick('FACTS')} id="facts">Leo&apos;s Facts</a></li>
				</ul>
			</div>
		);
	}
}

Filters.propTypes = {
	oncatClick: PropTypes.func.isRequired,
};

const mapStateToProps1 = state => state;

const mapDispatchToProps1 = dispatch => ({
	oncatClick: (id) => {
		dispatch(updatecat(id));
	},
});

Filters = connect(
	mapStateToProps1,
	mapDispatchToProps1,
)(Filters);

class Sidebar extends React.Component {
	render() {
		return (
			<p>Hello!</p>
		);
	}
}

class PageContainer extends React.Component {

	render() {
		const listItems = this.props.list.map(item =>
			<li key={item.item_number.toString()}>
				<a href="">
					<div className="img-wrap">
						<img src={item.img_src.toString()}></img>
					</div>
					<span>{item.img_txt.toString()}</span>
				</a>
			</li>,
		);
		return (
			<ul className="projects">
				{ listItems }
			</ul>
		);
	}
}

PageContainer.propTypes = {
	category: PropTypes.string.isRequired,
	list: PropTypes.arrayOf(PropTypes.shape({
		item_number: React.PropTypes.number,
		img_src: React.PropTypes.string,
		img_txt: React.PropTypes.string,
	})).isRequired,
};

// reducer handles how the state updates

function initalState() {
	return {
		category: category.PROJECTS,
		list: projectList.ANIMALS.concat(
			projectList.SCIENCE.concat(
				projectList.FACTS.concat(projectList.INSECTS))),
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
						projectList.INSECTS)))
			break;
		default:
			list = projectList.ANIMALS.concat(
				projectList.SCIENCE.concat(
					projectList.FACTS.concat(
						projectList.INSECTS)))
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

const store = createStore(projectswitcher);

// mapping to react

const mapStateToProps = state => ({
	category: state.category,
	list: state.list,
});

PageContainer = connect(
	mapStateToProps,
)(PageContainer);

export function toggleOverlay(state) {
	const overlay = $('.overlay');
	if (state) {
		overlay.css('display', 'flex');
		overlay.addClass('active');
		$('html').addClass('overlay-open');
	} else {
		overlay.css('display', 'flex');
		overlay.removeClass('active');
		$('html').removeClass('overlay-open');
	}
}

class Footer extends React.Component {
	render() {
		return (
			<footer className="introStatic">
				<div className="container">
					<div className="contact">
						<ul>
							<li><span>e</span><a href="mailto:info@hightidenyc.co">info@hightidenyc.co</a></li>
							<li><span>p</span><a href="http://derpspace.usite.pro/(917)%20723-4614">(917) 723-4614</a></li>
							<li><span>a</span><address>231 Derp Street, Snurf 209 | Brooklyn, NY</address></li>
						</ul>
					</div>
					<div className="contact_me">
						<a onClick={() => this.props.oncontactClick()} id="contact_overlay">Contact Me!</a>
					</div>
					<div className="social">
						<ul>
							<li>
								<a target="_blank" rel="noopener noreferrer" href="">
									<img no_src="./assets/icons/twittericon.png"></img>
								</a>
							</li>
							<li>
								<a target="_blank" rel="noopener noreferrer" href="">
									<img no_src="./assets/icons/instagramicon.png"></img>
								</a>
							</li>
							<li>
								<a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/YESTHISISDOGIAMONTHEPHONE">
									<img src="./assets/icons/facebookicon.png"></img>
								</a>
							</li>
							<li>
								<a target="_blank" rel="noopener noreferrer" href="http://leotide.tumblr.com/">
									<img src="./assets/icons/tumblricon.png"></img>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		);
	}
}

Footer.propTypes = {
	oncontactClick: PropTypes.func.isRequired,
};

const mapStateToProps2 = (state) => {
	return {
		state,
	};
};

const mapDispatchToProps2 = dispatch => ({
	oncontactClick: () => {
		toggleOverlay(true);
	},
});

Footer = connect(
	mapStateToProps2,
	mapDispatchToProps2,
)(Footer);

export function renderhtml() {
	ReactDOM.render(<Intro />, document.getElementById('intro'));
	ReactDOM.render(<IntroHeader />, document.getElementById('introHeader'));
	ReactDOM.render(
		<Provider store={store}>
			<Filters />
		</Provider>,
		document.getElementById('filters'));
	ReactDOM.render(<Overlay />, document.getElementById('overlay'));
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
}
