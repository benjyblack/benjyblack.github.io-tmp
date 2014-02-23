'use strict';

var personalAppControllers = angular.module('personalAppControllers', []);

personalAppControllers.controller('TravelCtrl', ['$scope', 'GoogleMaps',
	function($scope, GoogleMaps) {
		$scope.map = GoogleMaps.init();
	}
]);