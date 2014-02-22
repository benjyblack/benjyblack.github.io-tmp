'use strict'

var personalApp = angular.module('personalApp', ['ngRoute', 'personalAppControllers', 'personalAppServices']);

personalApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/home', {
            title: 'Home',
            templateUrl: 'partials/home.html'
        }).
            when('/projects', {
            title: 'Projects',
            templateUrl: 'partials/projects.html'
        }).
            when('/travel', {
            title: 'Travel',
            templateUrl: 'partials/travel.html'
        }).
            when('/blog', {
            title: 'Blog',
            templateUrl: 'partials/blog.html'
        }).
        otherwise({
            redirectTo: '/home'
        });
  }
]);

personalApp.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);