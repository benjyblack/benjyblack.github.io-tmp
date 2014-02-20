'use strict'

var personalApp = angular.module('personalApp', ['ngRoute']);

personalApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/home', {
            templateUrl: 'partials/home.html'
        }).
            when('/projects', {
            templateUrl: 'partials/projects.html'
        }).
        otherwise({
            redirectTo: '/home'
        });
  }
]);