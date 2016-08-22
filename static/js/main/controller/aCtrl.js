define(['app'],function (app) {
    app.controller('aCtrl', ['$scope', function($scope) {
    	var demo = app.get('demo');
        $scope.name = 'pageA';
        $scope.status = demo.status;
    }]);
});
