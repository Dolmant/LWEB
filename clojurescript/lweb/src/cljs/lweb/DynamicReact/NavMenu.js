// @flow
import {connect} from "react-redux"
import React from "react"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import Fade from "@material-ui/core/Fade"
import {category} from "./../consts"
import {actionCreators} from "./Actions"

type Props = {
    oncatClick: (string) => void,
    onmenuClick: () => void,
    category: string,
};

type State = {
    open: bool,
    anchorEl: any,
};

class NavMenu extends React.Component<Props, State> {
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
        if (!this.state.open) {
            event.preventDefault()
            event.stopPropagation()
            this.setState({
                open: true,
                anchorEl: event.currentTarget,
            })
        }
    }

    handleSelectMenu(e, id) {
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
                    <li key={item} onClick={event => this.handleOpenMenu(event)} id="HEADER"><a className="cursor"><strong>ILLUSTRATIONS <i className="fa fa-chevron-down" /></strong></a>
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
                            <MenuItem id="ALL" onClick={e => this.handleSelectMenu(e, "ALL")} >ALL</MenuItem>
                            <MenuItem id="NATURE" onClick={e => this.handleSelectMenu(e, "NATURE")} >NATURE</MenuItem>
                            <MenuItem id="SCIENCE" onClick={e => this.handleSelectMenu(e, "SCIENCE")} >SCIENCE</MenuItem>
                            <MenuItem id="ANATOMY" onClick={e => this.handleSelectMenu(e, "ANATOMY")} >ANATOMY</MenuItem>
                            <MenuItem id="FACTS" onClick={e => this.handleSelectMenu(e, "FACTS")} >FACTS</MenuItem>
                            <MenuItem id="TYPOGRAPHY" onClick={e => this.handleSelectMenu(e, "TYPOGRAPHY")} >TYPOGRAPHY</MenuItem>
                            <MenuItem id="MISC" onClick={e => this.handleSelectMenu(e, "MISC")} >MISC</MenuItem>
                        </Menu>
                    </li>
                )
            }
            return (
                <li className="cursor" key={item} onClick={() => this.props.oncatClick(item)} id={item}>
                    <a className="cursor">
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

        return menuOptions
    }
}

const mapStateToProps = state => ({
    category: state.category,
})

const mapDispatchToProps = dispatch => ({
    oncatClick: (id) => {
        dispatch(actionCreators.updateCategory(id))
        dispatch(actionCreators.toggleTouchmenu())
    },
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NavMenu)
