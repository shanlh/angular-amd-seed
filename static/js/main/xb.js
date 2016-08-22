define(['angular'],function(angular){
	var app = angular.module('xb', []);
	app.service('xb',['$http','$q','$rootScope', function ($http,$q,$rootScope) {
		return {
			get:function(url,param){
				var d = $q.defer();
					$http.get(url,param)
					.success(function(data){
						if(data.error==0){
							setTimeout(function(){
								d.resolve(data) ;	
							},1000);
						}else if(data.error==2000){
							// 需要登录,此处跳转
							
						}else{
							alert(data.msg);
						}			
					})
					.error(function(r){
						alert("网络繁忙");
						$rootScope.$broadcast('loaded');
					});
				return d.promise ;
	    	}
		}
	}]);
	app.directive('loading',[function() {
        return {
            restrict:'E',
            template:   '<div class="load-container">'+
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
});