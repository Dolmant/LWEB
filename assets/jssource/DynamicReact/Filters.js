import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {Motion, spring, presets} from 'react-motion';
import { updateCategory, toggleTouchmenu, category } from './../consts';

class Filters extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
		};
		this.handleRequestClose = () => {
			this.setState({
				open: false,
			});
		};

		this.handleOpenMenu = (event) => {
			// This prevents ghost click.
			event.preventDefault();

			this.setState({
				open: true,
				anchorEl: event.currentTarget,
			});
		};

		this.handleSelectMenu = (id) => {
			this.handleRequestClose();
			this.props.oncatClick(id);
		};
	}

	render() {
		// These five are handled manually. I'll have to build proper submenus someday
		const bundled = ['NATURE', 'POP SCIENCE', 'ANATOMY', 'TYPOGRAPHY', 'FACTS'];

		const filter = item => !bundled.includes(item);
		const mapper = (item) => {
			if (['ALL'].includes(item)) {
				// generate menu here
				return (
					<li key={item} onMouseOver={this.handleOpenMenu} onClick={this.handleOpenMenu} id="HEADER"><a><strong>ILLUSTRATIONS</strong></a>
						<Popover
							open={this.state.open}
							anchorEl={this.state.anchorEl}
							anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
							targetOrigin={{ horizontal: 'left', vertical: 'top' }}
							onRequestClose={this.handleRequestClose}
							useLayerForClickAway={false}
						>
							<Menu className="hi" onMouseLeave={() => setTimeout(this.handleRequestClose, 500)}>
								<MenuItem primaryText="ALL" id="ALL" onClick={() => this.handleSelectMenu('ALL')} />
								<MenuItem primaryText="NATURE" id="NATURE" onClick={() => this.handleSelectMenu('NATURE')} />
								<MenuItem primaryText="POP SCIENCE" id="POP SCIENCE" onClick={() => this.handleSelectMenu('POP SCIENCE')} />
								<MenuItem primaryText="ANATOMY" id="ANATOMY" onClick={() => this.handleSelectMenu('ANATOMY')} />
								<MenuItem primaryText="FACTS" id="FACTS" onClick={() => this.handleSelectMenu('FACTS')} />
								<MenuItem primaryText="TYPOGRAPHY" id="TYPOGRAPHY" onClick={() => this.handleSelectMenu('TYPOGRAPHY')} />
							</Menu>
						</Popover>
					</li>
				);
			}
			return (
				<li key={item} onClick={() => this.props.oncatClick(item)} id={item}>
					<a><strong>{item}</strong></a>
				</li>);
		};
		const menu_options = Object.keys(category).filter(filter).sort().map(mapper);

		if (!this.props.introOn) {
			if (!this.props.isTouch) {
				return (
					<Motion defaultStyle={{opacity: 0}} style={{opacity: spring(1, {stiffness: 20, damping: 17})}}>
						{interpolatingStyle => 
							<div key={1} style={interpolatingStyle}>
								<div className="background-ele"></div>
								<div className="filter-container container desktop">
									<ul>
										{ menu_options }
									</ul>
								</div>
							</div>
						}
					</Motion>
				);
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
												{ menu_options }
											</ul>
										</nav>
									</div>
								</div>
							</div>
						}
					</Motion>
				);
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
			);
		}
		return null;
	}
}
/* Removed Caruosel
<li><a onClick={() => props.oncatClick('CAROUSEL')} id="carousel">
Leo Over Time</a></li>
*/

Filters.propTypes = {
	oncatClick: PropTypes.func.isRequired,
	onmenuClick: PropTypes.func.isRequired,
	introOn: PropTypes.bool.isRequired,
	isTouch: PropTypes.bool.isRequired,
	touchmenu_active: PropTypes.bool.isRequired,
	category: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
	introOn: state.introOn,
	isTouch: state.isTouch,
	touchmenu_active: state.touchmenu_active,
	category: state.category,
});

const mapDispatchToProps = dispatch => ({
	oncatClick: (id) => {
		dispatch(updateCategory(id));
		dispatch(toggleTouchmenu());
	},
	onmenuClick: () => {
		dispatch(toggleTouchmenu());
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Filters);
