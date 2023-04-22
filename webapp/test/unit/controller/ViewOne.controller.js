/*global QUnit*/

sap.ui.define([
	"demoproject/controller/ViewOne.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ViewOne Controller");

	QUnit.test("I should test the ViewOne controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
