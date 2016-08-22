define(['app'],function (app) {
	app.controller('cCtrl', ['$scope', function($scope) {
		var xb = app.get('xb');
		$scope.name = 'pageC';
		$scope.send = function(){
			xb.http('GET','/demo.json').then(function(r){
				// doneCallbacks
				$scope.data = r;
			}, function(r){
				// failCallbacks
				$scope.data = r;
			});	
		}
		$scope.sendError = function(){
			xb.http('GET','/demo-error.json').then(function(r){
				$scope.data = r;
			}, function(r){
				$scope.data = r;
			});
		}
		$scope.sendFail = function(){
			// 没有这个接口，故意404来模拟ajax报错情况（比如断网等）
			xb.http('GET','/demo-fail.json');
		}
		$scope.sendJSONP = function(){
			xb.http('JSONP','https://angularjs.org/greet.php?callback=JSON_CALLBACK&name=JohnnyDan').then(function(r){
				$scope.data = r;
			})
		}
	}]);
});