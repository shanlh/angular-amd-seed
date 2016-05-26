define(['app','require'],function(app,require){
    var controllerlUrl = '/static/js/main/controller/' ;
    var serviceUrl = '/static/js/main/service/';
    var directiveUrl = '/static/js/main/directive/';

    app.config(['$stateProvider', '$urlRouterProvider','$locationProvider', function ($stateProvider, $urlRouterProvider,$locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/a');
        $stateProvider
            .state('a', {
                url: '/a',
                controller: 'aCtrl',
                controllerUrl: controllerlUrl+'aCtrl.js',
                dependencies: [serviceUrl+'demo.js',directiveUrl+'welcome.js'],
                templateUrl: '/application/view/a/a.html'
            })
            .state('b', {
                url: '/b',
                controller: 'bCtrl',
                controllerUrl: controllerlUrl+'bCtrl.js',
                templateUrl: '/application/view/b/b.html',
                dependencies: [serviceUrl+'demo.js'],
                resolve:{
                    r:['xb',function(xb){
                        return xb.get('/demo.json');
                    }]
                }
            })
            .state('c', {
                url: '/c',
                controller: 'cCtrl',
                controllerUrl: controllerlUrl+'cCtrl.js',
                templateUrl: '/application/view/c/c.html'
            });
    }]);
});