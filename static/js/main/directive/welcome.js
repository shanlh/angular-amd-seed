define(['angular','app'],function(angular,app){
	var module = angular.module('xb', []);

	module.directive('welcome', [function(){
		return {
			template: '<h1>Welcome to <b>{{name}}</b> Page.</h1>',
			link: function($scope, iElm, iAttrs, controller) {

			}
		};
	}]);

	app.useModule('xb');
});