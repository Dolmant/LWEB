// @flow
import {connect} from "react-redux"
import React from "react"
import {Motion, spring} from "react-motion"
import {actionCreators} from "./Actions"
import NavMenu from "./NavMenu"
import Hidden from "@material-ui/core/Hidden"

type Props = {
    introOn: bool,
    oncatClick: (string) => void,
    onmenuClick: () => void,
    category: string,
};

class Filters extends React.Component<Props> {
    render() {
        if (!this.props.introOn) {
            return (
                <Hidden xsDown>
                    <Motion defaultStyle={{opacity: 0}} style={{opacity: spring(1, {stiffness: 20, damping: 17})}}>
                        {interpolatingStyle =>
                            <div key={1} style={interpolatingStyle}>
                                <div className="background-ele"></div>
                                <div className="filter-container container">
                                    <ul>
                                        <NavMenu />
                                    </ul>
                                </div>
                            </div>
                        }
                    </Motion>
                </Hidden>
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
)(Filters)
