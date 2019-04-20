/*!
 * Copyright EY GDS
 * Author Pinaki Patra  2019
 */
sap.ui.define([
	"./../library", "sap/ui/core/Control", "./RemediationDisplayRenderer"
], function (library, Control, RemediationDisplayRenderer) {
	"use strict";
	var RemediationDisplay = Control.extend("ey.dqml.remediationdisplay.controls.RemediationDisplay", {
		metadata: {
			library: "ey.dqml.remediationdisplay",
			properties: {
				text: {
					type: "string",
					defaultValue: null
				}
			},
			events: {
				press: {}
			}
		},
		renderer: RemediationDisplayRenderer
	});
	return RemediationDisplay;
},   true);