/*!
 * Copyright EY GDS
 * Author Pinaki Patra  2019
 */
 
sap.ui.define([],
	function () {
		"use strict";
		var RemediationDisplayRenderer = {};
		RemediationDisplayRenderer.render = function (oRm, oControl) {

			//Write Parent
			oRm.write('<div');
			oRm.writeControlData(oControl);
			oRm.addClass("parentCell");
			oRm.writeClasses();
			oRm.write('style="background:' + oControl.getBgColor() + ';"');
			oRm.write(">");

			//Write selection Indicator
			oRm.write("<div");
			oRm.writeControlData(oControl);
			oRm.addClass("selectionIndicator");
			if (oControl.getSelected()) {
				oRm.addClass("selectionIndicatorVisible");
			}
			oRm.writeClasses();
			oRm.write(">&#10004</div>");
			//Write detection area
			if (oControl.getShowDetection()) {
				oRm.write(
					'<div class="detectionArea"> <span class="detectionArea">Indias Origin</span><span class="correctionIndicator error">  &#10006;</span> </div>'
				);
			}
			if (oControl.getShowRemediation()) {
				oRm.write(
					'<div class="remediationArea"><span class="detectionArea">Indias Origin</span><span class="correctionIndicator success">  &#10004;</span></div>'
				);
				oRm.write(
					' <div class="progressBar" width="1"><div class="progressValue">70%</div><div class="progressBarFilledContent"></div></div>');
			}
			//Write Tooltop
			if (oControl.getTooltipText().length>0) {
				oRm.write(' <span class="tooltiptext">' + oControl.getTooltipText() + '</span>');
			}

			oRm.write("</div>");
		};
		return RemediationDisplayRenderer;
	},  true);