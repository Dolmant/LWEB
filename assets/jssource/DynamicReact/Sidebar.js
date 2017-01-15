import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
import LazySizes from 'react-lazysizes';

const Sidebar = (props) => {
	if (props.sidebarOpen) {
		return (
			<div className="sidebar">
				<div className="sidebar-text">
					<LazySizes className="blur-up superlazy" dataSizes="auto" dataSrc="./assets/images/TextImage.jpg" src="./assets/thumbs/TextImage.jpg" alt="Not Loading!"></LazySizes>
				</div>
				<h3>COMMISSIONS</h3>
				<h4>Please use the &quot;Contact Me&quot; button in the bottom right of your screen to make an enquiry and ensure you at least include the following detail!</h4>
				<h4>Type of commission, for example:</h4>
				<ul>
					<li>
						<div className="sidebar-img-wrap">
							<img alt="Not Loading!" src="./assets/icons/rightarrow.png"></img>
						</div>
						<div>
							<h6>Scientific illustration</h6>
						</div>
					</li>
					<li>
						<div className="sidebar-img-wrap">
							<img alt="Not Loading!" src="./assets/icons/rightarrow.png"></img>
						</div>
						<div>
							<h6>Biomedical animation</h6>
						</div>
					</li>
					<li>
						<div className="sidebar-img-wrap">
							<img alt="Not Loading!" src="./assets/icons/rightarrow.png"></img>
						</div>
						<h6>General Sketch</h6>
					</li>
					<li>
						<div className="sidebar-img-wrap">
							<img alt="Not Loading!" src="./assets/icons/rightarrow.png"></img>
						</div>
						<h6>Detailed Sketch</h6>
					</li>
					<li>
						<div className="sidebar-img-wrap">
							<img alt="Not Loading!" src="./assets/icons/rightarrow.png"></img>
						</div>
						<h6>3D Model</h6>
					</li>
				</ul>
				<h4>Please add any other details you might require for your commission (e.g. subject matter, size, colours etc.). If there is a specific art style from one of my previous works that interests you please let me know!</h4>
			</div>
		);
	}
	return null;
};

Sidebar.propTypes = {
	sidebarOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
	sidebarOpen: state.sidebarOpen,
});

const mapDispatchToProps = () => ({
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Sidebar);
