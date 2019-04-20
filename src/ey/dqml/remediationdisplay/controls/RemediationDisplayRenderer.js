/*!
 * Copyright EY GDS
 * Author Pinaki Patra  2019
 */
 
sap.ui.define([],
	function () {
		"use strict";
		var ExampleRenderer = {};
		ExampleRenderer.render = function (oRm, oControl) {
			oRm.write("<div");
			oRm.writeControlData(oControl);
			oRm.addClass("sapRULTExample");
			oRm.writeClasses();
			oRm.write(">");
			oRm.write(sap.ui.getCore().getLibraryResourceBundle("ey.dqml.remediationdisplay").getText("ANY_TEXT"));

			oRm.writeEscaped(oControl.getText());
			oRm.write("</div>");
		};
		return ExampleRenderer;

	},  true);