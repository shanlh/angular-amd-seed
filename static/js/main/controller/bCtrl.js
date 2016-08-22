define(['app'],function (app) {
	app.controller('bCtrl', ['$scope','r', function($scope,r) {
		$scope.r = r ;
	}]);
});
