import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import * as assetsDisplay from './assets';


// actions you can send to the state:
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export function updatecat(category) {
	return { type: UPDATE_CATEGORY, category };
}

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
					<a className="fade" href="">Instagram?</a>
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
					<li onClick={() => this.props.oncatClick('PROJECTS')}><a id="projects">Leo&apos;s Projects</a></li>
					<li onClick={() => this.props.oncatClick('ANIMALS')}><a id="animals">Leo&apos;s Animals</a></li>
					<li onClick={() => this.props.oncatClick('INSECTS')}><a id="insects">Leo&apos;s Insects</a></li>
					<li onClick={() => this.props.oncatClick('SCIENCE')}><a id="science">Leo&apos;s Science</a></li>
					<li onClick={() => this.props.oncatClick('FACTS')}><a id="facts">Leo&apos;s Facts</a></li>
				</ul>
			</div>
		);
	}
}

Filters.propTypes = {
	oncatClick: PropTypes.func.isRequired,
};

const mapStateToProps1 = (state) => {
	return {
		state,
	};
};

const mapDispatchToProps1 = dispatch => ({
	oncatClick: (id) => {
		dispatch(updatecat(id));
	},
});

Filters = connect(
	mapStateToProps1,
	mapDispatchToProps1,
)(Filters);

class Overlay extends React.Component {
	render() {
		return (
			<p></p>
		);
	}
}

class Sidebar extends React.Component {
	render() {
		return (
			<p>Hello!</p>
		);
	}
}

class PageContainer extends React.Component {
	render() {
		if (this.props.category === 'PROJECTS')	{
			return (
				<ul className="projects">
					{ assetsDisplay.science() }
					{ assetsDisplay.animals() }
				</ul>
			);
		} else if (this.props.category === 'ANIMALS') {
			return (
				<ul className="projects">
					{ assetsDisplay.animals() }
				</ul>
			);
		} else if (this.props.category === 'SCIENCE') {
			return (
				<ul className="projects">
					{ assetsDisplay.science() }
				</ul>
			);
		}
		return (
			<a href="">
				<div className="img-wrap">
					<img src="./assets/b418719d6a25ee5cd4542c627a5fd762.jpg"></img>
				</div>
				<span>Leonie - Branding</span>
			</a>
		);
	}
}

PageContainer.propTypes = {
	category: PropTypes.string.isRequired,
};

// reducer handles how the state updates

function projectswitcher(state = { category: category.PROJECTS }, action) {
	switch (action.type) {
	case UPDATE_CATEGORY:
		return {
			category: action.category,
		};
	default:
		return state;
	}
}

// create store

const store = createStore(projectswitcher);

// mapping to react

const mapStateToProps = state => ({
	category: projectswitcher(state.category, state.category),
});

PageContainer = connect(
	mapStateToProps,
)(PageContainer);

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
					<div className="newsletter">
						<form id="newsForm">
							<label>Newsletter</label>
							<input type="text" name="e_mail_address" placeholder="Enter Email"></input>
							<input type="submit" value="submit"></input>
						</form>
					</div>
					<div className="social">
						<ul>
							<li>
								<a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/YESTHISISDOGIAMONTHEPHONE">
									<img src="./assets/4f480432915ecef876d62eefbeb5bc5e.png"></img>
								</a>
							</li>
							<li>
								<a target="_blank" rel="noopener noreferrer" href="">
									<img src="./assets/ed77402fcfb11e210044097a336ad1e6.png"></img>
								</a>
							</li>
							<li>
								<a target="_blank" rel="noopener noreferrer" href="">
									<img src="./assets/727a0a72ba2341e0bf8b5e0f1190c5f0.png"></img>
								</a>
							</li>
							<li>
								<a target="_blank" rel="noopener noreferrer" href="">
									<img src="./assets/60e3bc9b85b3431ff89f231cf0a84f5d.png"></img>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		);
	}
}

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
	ReactDOM.render(<Footer />, document.getElementById('introStatic'));
}
