(ns lweb.DynamicReact.App
    (:require [rum.core :as rum]))

(rum/defc App []
)

type Props = {
	overlay: any,
};

const App = (props) => {
	if (props.overlay.state) {
		return <Overlay />;
	}
	return null;
};

const mapStateToProps = state => ({
	overlay: state.overlay,
});

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
