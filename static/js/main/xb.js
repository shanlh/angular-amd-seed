define(['angular'],function(angular){
	var app = angular.module('xb', []);
	app.service('xb',['$http','$q','$rootScope', function ($http,$q,$rootScope) {
		return {
			http:function(method,url,param){
				method = method.toUpperCase();
				var d = $q.defer();
					$rootScope.$broadcast('loading');
					$http({
						method: method,
						url: url,
						data: param
					}).then(function(response) {
						var data = response.data;
						var status = response.status;
						if(method == 'JSONP'){
							d.resolve(response.data);
							$rootScope.$broadcast('loaded');
						}else{
							if(data.error==0){
								setTimeout(function(){
									d.resolve(data.data);
									$rootScope.$broadcast('loaded');
								},1000);
							}else if(data.error==2000){
								// 需要登录,此处跳转
								
							}else{
								// 其他错误码
								$rootScope.$broadcast('tip',data.msg);
								d.reject(data);
								$rootScope.$broadcast('loaded');
							}
						}
					}, function(response) {
						var status = response.status;
						var data = response.data || "Request failed";
						if(status == -1){
							// offline
							alert("offline");
						}else if(status == 404){
							// 404
							alert("404");
						}
						$rootScope.$broadcast('loaded');
					});
				return d.promise ;
			}
		}
	}]);
	app.directive('xbloading',[function() {
		return {
			restrict:'E',
			replace :true,
			template:   '<div class="xbloading-container">'+
							'<span>'+
								'<img src="https://static-hilava-com.alikunlun.com/static/yingxiao/jiakaointro/loading.png">'+
							'</span>'+
						'</div>',
			link:function(scope,element){
				scope.$on('loaded',function(){
					element.addClass('hide');
				});
				scope.$on('loading',function(){
					element.removeClass('hide');
				}); 
				scope.$on('$stateChangeStart', function () {
					element.removeClass('hide');
				});
				scope.$on('$viewContentLoading',function(){
					element.addClass('hide');
				})
			}
		};
	}]);
	app.directive('xbtips',['$timeout',function($timeout) {
		return {
			restrict:'E',
			replace :true,
			template:'<span class="xbtips hide"></span>',
			link:function(scope,element){
				scope.$on('tip',function(event,data){
					console.log("in");
					element.text(data);
					element.removeClass('hide');
					element.addClass('tips-show');
					if(element.timeout){
						$timeout.cancel(element.timeout);
					}
					element.timeout = $timeout(function(){
						element.addClass('hide');
						element.removeClass('tips-show');
					},1500)
				}); 
			}
		};
	}]);
});