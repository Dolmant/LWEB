/*global $, jQuery, alert */
function get_projects() {
return 4;
}

function get_science() {
    "use strict";
	var overlay = document.getElementById('overlay');
	var specialBox = document.getElementById('specialBox');
	overlay.style.opacity = .8;
	if(overlay.style.display == "flex"){
		overlay.style.display = "none";
		specialBox.style.display = "none";
	} else {
		overlay.style.display = "flex";
		specialBox.style.display = "flex";
	}
}

module.exports = {
    get_projects,
    get_science,
};