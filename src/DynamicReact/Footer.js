// @flow
import {connect} from "react-redux"
import React from "react"
import {actionCreators} from "./Actions"

type Props = {
    introOn: bool,
    onContactClick: () => void,
};

const Footer = (props: Props) => {
    if (!props.introOn) {
        return (
            <footer>
                <div className="footer-container container">
                    <div className="contact">
                        <ul>
                            <li><a>Member of the Australian Institute of Medical and Biological Illustration</a></li>
                        </ul>
                    </div>
                    <div className="contact_me">
                        <a onClick={() => props.onContactClick()} id="contact_overlay">Contact Me!</a>
                    </div>
                    <div className="social">
                        <ul>
                            <li>
                                <a target="_blank" rel="noopener noreferrer" href="http://leotide.tumblr.com/">
                                    <img alt="It's not loading!" src="./assets/icons/tumblricon.png"></img>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/leotidelh?lang=en">
                                    <img alt="It's not loading!" src="./assets/icons/twittericon.png"></img>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/leo_tide/">
                                    <img alt="It's not loading!" src="./assets/icons/instagramicon.png"></img>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }
    return null
}

const mapStateToProps = state => ({
    introOn: state.introOn,
})

const mapDispatchToProps = dispatch => ({
    onContactClick: () => {
        dispatch(actionCreators.toggleOverlay(true, false))
    },
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Footer)
