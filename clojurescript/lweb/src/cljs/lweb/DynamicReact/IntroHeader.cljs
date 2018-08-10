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
                        <div>
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
                        : null}
                </div>
                <h1>
                    <img onClick={() => this.props.onHomeClick()} src="./assets/images/LEOTIDE.png" alt="LeoTide"></img>
                </h1>
                <div className="right">
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
                <header key={1} className="main-header">
                    {result}
                </header>
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
