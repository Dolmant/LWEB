import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Sidebar from './DynamicReact/Sidebar';
import Intro from './DynamicReact/Intro';
import IntroHeader from './DynamicReact/IntroHeader';
import Filters from './DynamicReact/Filters';
import OverlayController from './DynamicReact/OverlayController';
import PageContainer from './DynamicReact/PageContainer';
import Footer from './DynamicReact/Footer';

class App extends React.Component {
	render() {
		return (
			<div>
				<div id="intro" className="intro" ><Intro /></div>
				<div id="introHeader" className="introHeader"><IntroHeader /></div>
				<div id="filters" className={this.props.introOn ? 'filtersTemp' : 'filters'}>
					<MuiThemeProvider>
						<Filters />
					</MuiThemeProvider>
				</div>
				<div id="overlay" className="overlay"><OverlayController /></div>
				<div id="sidebar-top" className="sidebar-top"><Sidebar /></div>
				<div id="page-container" className="page container"><PageContainer /></div>
				<div id="footer" className="footer"><Footer /></div>
			</div>
		);
	}
}

App.propTypes = {
	introOn: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
	introOn: state.introOn,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App);
