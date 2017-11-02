sap.ui.jsview("LindeSAPBAIS-html5.view.HelloSAP", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.HelloSAP
	 */
	getControllerName: function() {
		return "LindeSAPBAIS-html5.controller.HelloSAP";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.HelloSAP
	 */
	createContent: function(oController) {
		var oPage = new sap.m.Page({
			title: "{i18n>HelloSAP}",
			content: []
		});

		var app = new sap.m.App("myApp", {
			initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
	}

});