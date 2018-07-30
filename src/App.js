// @flow
import React from "react"
import {connect} from "react-redux"
import Sidebar from "./DynamicReact/Sidebar"
import Intro from "./DynamicReact/Intro"
import IntroHeader from "./DynamicReact/IntroHeader"
import Filters from "./DynamicReact/Filters"
import OverlayController from "./DynamicReact/OverlayController"
import PageContainer from "./DynamicReact/PageContainer"
import Footer from "./DynamicReact/Footer"

type Props = {
    introOn: bool,
};

class App extends React.Component<Props> {
    render() {
        return (
            <div>
                <div id="intro" className="intro" ><Intro /></div>
                <div id="introHeader" className="introHeader"><IntroHeader /></div>
                <div id="filters" className={this.props.introOn ? "filtersTemp" : "filters"}>
                    <Filters />
                </div>
                <div id="overlay" className="overlay"><OverlayController /></div>
                <div id="sidebar-top" className="sidebar-top"><Sidebar /></div>
                <div id="page-container" className="page container"><PageContainer /></div>
                <div id="footer" className="footer"><Footer /></div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    introOn: state.introOn,
})

const mapDispatchToProps = () => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App)
