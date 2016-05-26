require.config({
    baseUrl: './',
    paths: {
        'angular': '/static/lib/angular/angular.min',
        'angular-ui-router': '/static/lib/angular-ui-router/angular-ui-router.min',
        'angular-async-loader': '/static/lib/angular-async-loader/angular-async-loader.min',
        'router': '/static/js/router',
        'app': '/static/js/app',
        'xb': '/static/js/main/xb'
    },
    shim: {
        'angular': {exports: 'angular'},
        'angular-ui-router': {deps: ['angular']}
    }
});

require(['angular','router'], function (angular) {
    angular.bootstrap(document, ['app']);
});