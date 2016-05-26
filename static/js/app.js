define(['require',
		'exports',
		'module',
		'angular',
		'angular-async-loader',
		'angular-ui-router',
		'xb'
],function (require, exports, module,angular,asyncLoader) {
	var app = angular.module('app', ['ui.router','xb']);
	asyncLoader.configure(app);
	module.exports = app;
});