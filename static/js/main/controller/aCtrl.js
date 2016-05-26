define(['app'],function (app) {
    app.controller('aCtrl', ['$scope', function($scope) {
    	var xb = app.get('xb');
    	var demo = app.get('demo');
        $scope.name = 'pageA';

        $scope.status = demo.status;

        $scope.$emit('loaded');
    }]);
});
