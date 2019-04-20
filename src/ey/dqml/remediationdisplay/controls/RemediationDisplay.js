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
				},
				bgColor: {
					type: "string",
					defaultValue: null
				},
				selected: {
					type: "boolean",
					defaultValue: false
				},
				showDetection: {
					type: "boolean",
					defaultValue: true
				},
				selectionEnabled: {
					type: "boolean",
					defaultValue: true
				},
				showRemediation: {
					type: "boolean",
					defaultValue: true
				},
				tooltipText : {
					type: "string",
					defaultValue: null
				}
			},
			events: {
				press: {
					parameters: {
						isSelected: {
							type: "boolean"
						}
					}
				}
			}
		},
		init: function () {
			Control.prototype.init.call(this);
		},
		renderer: RemediationDisplayRenderer,
		onclick: function (oEvent) {
			if (!this.getSelectionEnabled()) {
				return;
			}
			this.setProperty('selected', !this.getProperty('selected'));
			this.fireEvent('press', {
				isSelected: this.getSelected()
			});
		}
	});
	return RemediationDisplay;
},   true);