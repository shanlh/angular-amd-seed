define(['angular','app'],function(angular,app){
	var module = angular.module('xb', []);

	module.service('demo',[function () {
		return {
			status:"调用成功"
		}
	}]);

	app.useModule('xb');
});