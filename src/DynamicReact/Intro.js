// @flow
import {connect} from "react-redux"
import React from "react"
import {Motion, spring} from "react-motion"
import {convertType} from "./../consts"
import {actionCreators} from "./Actions"

type Props = {
    introOn: bool,
    onScrollOver: () => void,
};

let bounce = true
class Intro extends React.Component<Props> {
    componentDidMount() {
        // window.addEventListener('scroll', this.handleScroll);
        window.addEventListener("wheel", () => this.handleScroll())
    }
    componentWillUnmount() {
        window.removeEventListener("wheel", () => this.handleScroll())
    }

    handleScroll() {
        if (bounce) {
            this.props.onScrollOver()
        }
        bounce = false
    }

    render() {
        return (
            <Motion style={{height: spring(100 * (this.props.introOn ? 1 : 0), {stiffness: 300, damping: 30})}}>
                {interpolatingStyle =>
                    <div key={1} style={convertType(interpolatingStyle, ["height"], "vh")} className="intro-container">
                        <Motion defaultStyle={{maxHeight: 0}} style={{maxHeight: spring(40, {stiffness: 30, damping: 6})}}>
                            {interpolatingStyle2 =>
                                <div key={2} className="intro-logo" >
                                    <img style={convertType(interpolatingStyle2, ["maxHeight"], "vh")} onClick={() => { this.props.onScrollOver() }} alt="It's not loading!" src="./assets/images/LEOTIDE.png"></img>
                                </div>
                            }
                        </Motion>
                        <div onClick={() => { this.props.onScrollOver() }} className="into-scroll-prompt">
                            <div className="blink-container">
                                <i className="fas fa-arrow-alt-circle-down"></i>
                                <div className="blink" />
                            </div>
                            <div>{"Scroll down"}</div>
                        </div>
                        <div className="introImage" id="introImage" />
                    </div>
                }
            </Motion>
        )
    }
}

const mapStateToProps = state => ({
    introOn: state.introOn,
})

const mapDispatchToProps = dispatch => ({
    onScrollOver: () => {
        dispatch(actionCreators.updateIntroState(false))
    },
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Intro)
