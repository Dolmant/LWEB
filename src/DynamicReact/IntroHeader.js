// @flow
import {connect} from "react-redux"
import React from "react"
import $ from "./../jquery.min"
import {actionCreators} from "./Actions"
import Drawer from "@material-ui/core/Drawer"
import {Motion, spring} from "react-motion"
import NavMenu from "./NavMenu"

type Props = {
    introOn: bool,
    sidebarOpen: bool,
    category: string,
    shoppingCart: any,
    onScrollOver: () => void,
    onHomeClick: () => void,
    onSidebarOpen: () => void,
    updateCategory: (string) => void,
    touchmenu_active: bool,
};

type State = {
    menuOpen: boolean,
}

class IntroHeader extends React.Component<Props, State> {
    state = {
        menuOpen: false,
    }

    SidebarHelper(delay) {
        setTimeout(() => {
            if (this.props.sidebarOpen) {
                $(".overlay, header, footer").unbind("touchmove", (event) => {
                    event.preventDefault()
                })
            } else {
                $(".overlay, header, footer").bind("touchmove", (event) => {
                    event.preventDefault()
                })
            }
            this.props.onSidebarOpen()
            $("html").toggleClass("sidebar-open")
        }, delay)
    }

    aboutMeClick() {
        if (this.props.introOn) {
            this.SidebarHelper(1000)
            this.props.onScrollOver()
        } else {
            this.SidebarHelper(0)
        }
    }

    render() {
        let totalCount = 0
        this.props.shoppingCart.forEach((item) => {
            totalCount += item.count
        })
        const result = (
            <div className="container">
                <div className="left">
                    {/* <a className="fade" rel="noopener noreferrer" style={style()} target="_blank" href="http://leotide.tumblr.com/">Tumblr!</a> */}
                    {!this.props.introOn ?
                        <Motion defaultStyle={{opacity: 0}} style={{opacity: spring(1, {stiffness: 20, damping: 17})}}>
                            {interpolatingStyle =>
                                <div key={3} style={interpolatingStyle}>
                                    <a className="menu" onClick={() => this.setState({menuOpen: true})}><span>≡</span></a>
                                    <Drawer open={this.state.menuOpen} onClose={() => this.setState({menuOpen: false})}>
                                        <div
                                            tabIndex={0}
                                            role="button"
                                            onClick={() => this.setState({menuOpen: false})}
                                            onKeyDown={() => this.setState({menuOpen: false})}
                                        >
                                            <ul className="mobileMenu">
                                                <NavMenu />
                                            </ul>
                                        </div>
                                    </Drawer>
                                </div>
                            }
                        </Motion>
                        : null}
                </div>
                <h1>
                    <img onClick={() => this.props.onHomeClick()} src="./assets/images/LEOTIDE.png" alt="LeoTide"></img>
                </h1>
                <div className="right">
                    {/* <a className="about-me" style={style()} onClick={() => this.aboutMeClick()}>About Me</a> */}
                    {!this.props.introOn && this.props.category !== "CHECKOUT" ?
                        <div className="cursor" onClick={() => this.props.updateCategory("CHECKOUT")}>
                            <div className="total-count">
                                {totalCount}
                            </div>
                            <i className="fa fa-shopping-cart" />
                        </div>
                    :
                        null}
                </div>
            </div>
        )
        if (this.props.introOn) {
            return (
                <header className="introHeaderTemp">
                    {result}
                </header>
            )
        }
        return (
            <header className="main-header">
                <Motion defaultStyle={{opacity: 0}} style={{opacity: spring(1, {stiffness: 20, damping: 17})}}>
                    {interpolatingStyle =>
                        <header key={1} style={interpolatingStyle} className="main-header">
                            {result}
                        </header>
                    }
                </Motion>
            </header>
        )
    }
}

const mapStateToProps = state => ({
    shoppingCart: state.shoppingCart,
    introOn: state.introOn,
    category: state.category,
    sidebarOpen: state.sidebarOpen,
    touchmenu_active: state.touchmenu_active,
})

const mapDispatchToProps = dispatch => ({
    onSidebarOpen: () => {
        dispatch(actionCreators.toggleSidebar())
    },
    onHomeClick: () => {
        dispatch(actionCreators.selectPage("home"))
    },
    onScrollOver: () => {
        dispatch(actionCreators.updateIntroState(false))
    },
    updateCategory: (page) => {
        dispatch(actionCreators.updateCategory(page))
    },
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(IntroHeader)
