// @flow
import {connect} from "react-redux"
import React from "react"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import Fade from "@material-ui/core/Fade"
import {Motion, spring} from "react-motion"
import {category} from "./../consts"
import {actionCreators} from "./Actions"

type Props = {
    introOn: bool,
    oncatClick: (string) => void,
    onmenuClick: () => void,
    introOn: bool,
    isTouch: bool,
    touchmenu_active: bool,
    category: string,
};

type State = {
    open: bool,
    anchorEl: any,
};

class Filters extends React.Component<Props, State> {
    state = {
        open: false,
        anchorEl: null,
    }

    handleRequestClose() {
        this.setState({
            open: false,
        })
    }

    handleOpenMenu(event) {
        // This prevents ghost click.
        event.preventDefault()

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        })
    }

    handleSelectMenu(id) {
        this.handleRequestClose()
        this.props.oncatClick(id)
    }

    render() {
        // These six are handled manually. I'll have to build proper submenus someday
        const bundled = ["NATURE", "SCIENCE", "ANATOMY", "TYPOGRAPHY", "FACTS", "MISC"]

        const filter = item => !bundled.includes(item)
        const mapper = (item) => {
            if (["ALL"].includes(item)) {
                // generate menu here
                return (
                    <li key={item} onClick={event => this.handleOpenMenu(event)} id="HEADER"><a><strong>ILLUSTRATIONS <i className="fa fa-chevron-down" /></strong></a>
                        {/* <Popover

                                            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                                            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                                            useLayerForClickAway={false}
                                        > */}
                        <Menu
                            onClose={() => this.handleRequestClose()}
                            className="hi"
                            transition={Fade}
                            open={this.state.open}
                            anchorEl={this.state.anchorEl}
                        >
                            <MenuItem id="ALL" onClick={() => this.handleSelectMenu("ALL")} >ALL</MenuItem>
                            <MenuItem id="NATURE" onClick={() => this.handleSelectMenu("NATURE")} >NATURE</MenuItem>
                            <MenuItem id="SCIENCE" onClick={() => this.handleSelectMenu("SCIENCE")} >SCIENCE</MenuItem>
                            <MenuItem id="ANATOMY" onClick={() => this.handleSelectMenu("ANATOMY")} >ANATOMY</MenuItem>
                            <MenuItem id="FACTS" onClick={() => this.handleSelectMenu("FACTS")} >FACTS</MenuItem>
                            <MenuItem id="TYPOGRAPHY" onClick={() => this.handleSelectMenu("TYPOGRAPHY")} >TYPOGRAPHY</MenuItem>
                            <MenuItem id="MISC" onClick={() => this.handleSelectMenu("MISC")} >MISC</MenuItem>
                        </Menu>
                    </li>
                )
            }
            return (
                <li key={item} onClick={() => this.props.oncatClick(item)} id={item}>
                    <a>
                        <strong>{item}</strong>
                    </a>
                </li>
            )
        }
        const sorter = (category1, category2) => {
            if (category1 === "CHECKOUT") {
                return 1
            }
            if (category2 === "CHECKOUT") {
                return -1
            }
            if (category1 === "3D MODELS/PRINTING") {
                return 1
            }
            if (category2 === "3D MODELS/PRINTING") {
                return -1
            }
            if (category1 > category2) {
                return 1
            }
            if (category1 < category2) {
                return -1
            }
            return 0
        }
        const menuOptions = Object.keys(category).filter(filter).sort(sorter).map(mapper)

        if (!this.props.introOn) {
            if (!this.props.isTouch) {
                return (
                    <Motion defaultStyle={{opacity: 0}} style={{opacity: spring(1, {stiffness: 20, damping: 17})}}>
                        {interpolatingStyle =>
                            <div key={1} style={interpolatingStyle}>
                                <div className="background-ele"></div>
                                <div className="filter-container container desktop">
                                    <ul>
                                        { menuOptions }
                                    </ul>
                                </div>
                            </div>
                        }
                    </Motion>
                )
            }
            if (this.props.touchmenu_active) {
                return (
                    <Motion defaultStyle={{opacity: 0}} style={{opacity: spring(1, {stiffness: 20, damping: 17})}}>
                        {interpolatingStyle =>
                            <div key={2} style={interpolatingStyle}>
                                <div className="background-ele"></div>
                                <div className="filter-container container">
                                    <a className="menu" onClick={() => this.props.onmenuClick()}><span>≡</span> Menu</a>
                                    <div className="drawer active touch">
                                        <nav>
                                            <ul>
                                                { menuOptions }
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                                }
                    </Motion>
                )
            }
            return (
                <Motion defaultStyle={{opacity: 0}} style={{opacity: spring(1, {stiffness: 20, damping: 17})}}>
                    {interpolatingStyle =>
                        <div key={3} style={interpolatingStyle}>
                            <div className="background-ele"></div>
                            <div className="filter-container container">
                                <a className="menu" onClick={() => this.props.onmenuClick()}><span>≡</span> Menu</a>
                                <div className="drawer">
                                </div>
                            </div>
                        </div>
                    }
                </Motion>
            )
        }
        return null
    }
}
/* Removed Caruosel
<li><a onClick={() => props.oncatClick('CAROUSEL')} id="carousel">
Leo Over Time</a></li>
*/

const mapStateToProps = state => ({
    introOn: state.introOn,
    isTouch: state.isTouch,
    touchmenu_active: state.touchmenu_active,
    category: state.category,
})

const mapDispatchToProps = dispatch => ({
    oncatClick: (id) => {
        dispatch(actionCreators.updateCategory(id))
        dispatch(actionCreators.toggleTouchmenu())
    },
    onmenuClick: () => {
        dispatch(actionCreators.toggleTouchmenu())
    },
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Filters)
