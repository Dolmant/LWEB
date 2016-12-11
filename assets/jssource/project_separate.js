/*global $, jQuery, alert */
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

class Intro extends React.Component {
  render() {
    return (<div>
    <div className="intro-logo" >
        <img src="./assets/images/bigderp.png"></img>
    </div>
    <video className="introVideo" autoPlay="" loop="">
        <source src="http://hightide.vaesite.net/__data/c2a165d9d5bfafc75d164f1cc461086f.mp4" type="video/mp4"></source>
        <source src="http://hightide.vaesite.net/__data/ebb929a4ee2f8e8409f503dab0d8e4e7.ogv" type="video/ogg"></source>
    </video>
</div>
            ) 
  }
}

class IntroHeader extends React.Component {
  render() {
    return (<div className="container">
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
            )
  }
}
        
        class Filters extends React.Component {
  render() {
    return (<div className="container">
        <ul>
            <li><a href="#" id="projects">Leo's Projects</a></li>
            <li><a href="#" id="animals">Leo's Animals</a></li>
            <li><a id="insects">Leo's Insects</a></li>
            <li><a id="science">Leo's Science</a></li>
            <li><a id="facts">Leo's Facts</a></li>
        </ul>
    </div>
        )
  }
}

        class Overlay extends React.Component {
  render() {
    return (<p>Hello!</p>
        )
  }
        }

        class Sidebar extends React.Component {
  render() {
    return (
<p>Hello!</p>
            )
  }
        }


        
        class PageContainer extends React.Component {
static propTypes = {
  category: PropTypes.string.isRequired
  }
  render() {
      if (this.state.category = "projects")
          {
    return (
    <ul className="projects">
        <li>
            <a href="">
                <div className="img-wrap"><img src="./assets/b418719d6a25ee5cd4542c627a5fd762.jpg"></img></div>
                <span>Leonie - Branding</span>
            </a>
        </li>
        <li>
            <a href="">
                <div className="img-wrap"><img src="./assets/99d34be1b2bdd39c7fdbce1a1ae1190e.jpg"></img></div>
                <span>Leo - Que Rico</span>
            </a>
        </li>
        <li>
            <a href="">
                <div className="img-wrap"><img src="./assets/1debe7be15173c16096a32b32f196edd.jpg"></img></div>
                <span>Bat Queen</span>
            </a>
        </li>
        <li>
            <a href="">
                <div className="img-wrap"><img src="./assets/5e958b0ff0841d746d46495ce52cf9c3.jpg"></img></div>
                <span>Leo by Leo</span>
            </a>
        </li>
        <li>
            <a href="">
                <div className="img-wrap"><img src="./assets/images/bigpotato.jpg"></img></div>
                <span>Potato</span>
            </a>
        </li>
        <li>
            <a href="">
                <div className="img-wrap"><img src="./assets/4383358511db6748e7a9fd6efb1b665a.jpg"></img></div>
                <span>The Best</span>
            </a>
        </li>
    </ul>
            )
          }    else if(this.state.category = "animals")    {
        return(
        <ul className="projects">
        <li>
            <a href="">
                <div className="img-wrap"><img src="./assets/b418719d6a25ee5cd4542c627a5fd762.jpg"></img></div>
                <span>Leonie - Branding</span>
            </a>
        </li>
                <li>
            <a href="">
                <div className="img-wrap"><img src="./assets/b418719d6a25ee5cd4542c627a5fd762.jpg"></img></div>
                <span>Leonie - Branding</span>
            </a>
        </li>
                <li>
            <a href="">
                <div className="img-wrap"><img src="./assets/b418719d6a25ee5cd4542c627a5fd762.jpg"></img></div>
                <span>Leonie - Branding</span>
            </a>
        </li>
                <li>
            <a href="">
                <div className="img-wrap"><img src="./assets/b418719d6a25ee5cd4542c627a5fd762.jpg"></img></div>
                <span>Leonie - Branding</span>
            </a>
        </li>
    </ul>
        )
    }      else {
          return(            
              <a href="">
                <div className="img-wrap"><img src="./assets/b418719d6a25ee5cd4542c627a5fd762.jpg"></img></div>
                <span>Leonie - Branding</span>
            </a>
                )
      }
  }
        }
        


const mapStateToProps = state => ({
  category: state.category
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
        
class Footer extends React.Component {
  render() {
    return (
<footer className="introStatic">
    <div className="container">
        <div className="contact">
            <ul>
                <li><span>e</span><a href="mailto:info@hightidenyc.co">info@hightidenyc.co</a></li>
                <li><span>p</span><a href="http://derpspace.usite.pro/(917)%20723-4614">(917) 723-4614</a></li>
                <li><span>a</span><address>231 Derp Street, Snurf 209 | Brooklyn, NY 11201</address></li>
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
                <li><a target="_blank" href="https://www.facebook.com/YESTHISISDOGIAMONTHEPHONE"><img src="./assets/4f480432915ecef876d62eefbeb5bc5e.png"></img></a></li>
                <li><a target="_blank" href=""><img src="./assets/ed77402fcfb11e210044097a336ad1e6.png"></img></a></li>
                <li><a target="_blank" href=""><img src="./assets/727a0a72ba2341e0bf8b5e0f1190c5f0.png"></img></a></li>
                <li><a target="_blank" href=""><img src="./assets/60e3bc9b85b3431ff89f231cf0a84f5d.png"></img></a></li>
            </ul>
        </div>
    </div>
</footer>
    );
  }
}

export function renderhtml() {
    ReactDOM.render(<Intro />,document.getElementById("intro"));
    ReactDOM.render(<IntroHeader />,document.getElementById("introHeader"));
    ReactDOM.render(<Filters />,document.getElementById("filters"));
    ReactDOM.render(<Overlay />,document.getElementById("overlay"));
    ReactDOM.render(<Sidebar />,document.getElementById("sidebar"));
    ReactDOM.render(<PageContainer1 />,document.getElementById("page-container"));
    ReactDOM.render(<Footer />,document.getElementById("introStatic"));
}
export function renderpage1() {
    ReactDOM.render(<PageContainer1 />,document.getElementById("page-container"));
}
export function renderpage2() {
    var num = 4;
    ReactDOM.render(<PageContainer2 />,document.getElementById("page-container"));
    var num = 6;
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

function get_science() {
    "use strict";
	var overlay = document.getElementById('overlay');
	var specialBox = document.getElementById('specialBox');
	overlay.style.opacity = .8;
	if(overlay.style.display == "flex"){
		overlay.style.display = "none";
		specialBox.style.display = "none";
	} else {
		overlay.style.display = "flex";
		specialBox.style.display = "flex";
	}
}