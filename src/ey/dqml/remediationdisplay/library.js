/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library ey.dqml.remediationdisplay.
 */
sap.ui.define(["sap/ui/core/library"], // library dependency
	function () {

		"use strict";

		/**
		 * RemediationDisplay for DQML
		 *
		 * @namespace
		 * @name ey.dqml.remediationdisplay
		 * @author SAP SE
		 * @version 1.0.0
		 * @public
		 */

		// delegate further initialization of this library to the Core
		sap.ui.getCore().initLibrary({
			name: "ey.dqml.remediationdisplay",
			version: "1.0.0",
			dependencies: ["sap.ui.core"],
			types: [],
			interfaces: [],
			controls: [
				"ey.dqml.remediationdisplay.controls.RemediationDisplay"
			],
			elements: []
		});

		/* eslint-disable */
		return ey.dqml.remediationdisplay;
		/* eslint-enable */

	}, /* bExport= */ false);