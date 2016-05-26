define(['app'],function (app) {
	app.controller('cCtrl', ['$scope', function($scope) {
		var xb = app.get('xb');
		$scope.name = 'pageC';
		$scope.$emit('loaded');
	}]);
});