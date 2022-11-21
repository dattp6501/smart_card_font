var SmartCardApp = angular.module('SmartCardApp',[
    'ui.router',
    'ui.bootstrap',
    'oc.lazyLoad',
    'ngSanitize',
    'uiRouterStyles',
    'ngCookies',
    'ngTable'
]);
SmartCardApp.config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
       
    });
}]);

SmartCardApp.config(['$controllerProvider', function ($controllerProvider) {
    // this option might be handy for migrating old apps, but please don't use it
    // in new ones!
    $controllerProvider.allowGlobals();
}]);

SmartCardApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    var app = './app';
    $urlRouterProvider.otherwise('/login');
    $stateProvider
    .state("login", {
        url: "/login",
        templateUrl: app+'/login/login.view.html',
        data: {
            pageTitle: 'Login',
            css: [`./assets/css/custom.css`]
        },
        controller: "LoginCtrl",
        resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'SmartCardApp',
                    files: [
                        app+'/login/login.controller.js',
                        app+'/login/login.service.js'
                    ]
                });
            }]
        }
    })
    .state("dashboard", {
        url: "/dashboard",
        templateUrl: app+'/dashboard/dashboard.view.html',
        data: {
            pageTitle: 'Dashboard',
            css: [`./assets/css/custom.css`]
        },
        controller: "DashboardCtrl",
        resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'SmartCardApp',
                    files: [
                        app+'/dashboard/dashboard.controller.js',
                        app+'/dashboard/dashboard.service.js'
                    ]
                });
            }]
        }
    })
    .state("historyexit", {
        url: "/history-exit",
        templateUrl: app+'/historyexit/historyexit.view.html',
        data: {
            pageTitle: 'HistoryExit',
            css: [`./assets/css/custom.css`]
        },
        controller: "HistoryExitCtrl",
        resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'SmartCardApp',
                    files: [
                        app+'/historyexit/historyexit.controller.js',
                        app+'/historyexit/historyexit.service.js'
                    ]
                });
            }]
        }
    });
}]);

SmartCardApp.controller('AppController', ['$scope', '$rootScope', '$location','$cookies', 
function ($scope, $rootScope, $location, $cookies) {
    (function initController() {
        $rootScope.sh_header = true;
    })();

}]);

SmartCardApp.run(["$rootScope", function ($rootScope) {
    // $rootScope.hostname = "http://localhost:8080/librarymanagerapi";
    $rootScope.hostname = "https://smart-card-api.herokuapp.com";
}]);