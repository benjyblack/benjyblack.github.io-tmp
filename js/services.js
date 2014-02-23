'use strict';

var personalAppServices = angular.module('personalAppServices', []);

personalAppServices.factory('GoogleMaps', function() {

	var locations = [
		{ title: 'Morocco', position: { lat:31.791702, lng:-7.092620 } },
		{ title: 'Guatemala ', position: { lat:15.783471, lng:-90.230759 } },
		{ title: 'Thailand' , position: { lat:15.870032, lng:100.992541 } },
		{ title: 'Vietnam', position: { lat:14.058324, lng:108.277199 } },
		{ title: 'Laos', position: { lat:19.856270, lng:102.495496 } },
		{ title: 'Cambodia' , position: { lat:12.565679, lng:104.990963 } },
		{ title: 'Ireland', position: { lat:53.415041, lng:-8.230219 } },
		{ title: 'England', position: { lat:52.355518, lng:-1.174320 } },
		{ title: 'France', position: { lat:46.227638, lng:2.213749 } },
		{ title: 'Spain', position: { lat:40.463667, lng:-3.749220 } },
		{ title: 'Italy', position: { lat:41.871940, lng:12.567380 } },
		{ title: 'Switzerland', position: { lat:46.818188, lng:8.227512 } },
		{ title: 'Hungary', position: { lat:47.162494, lng:19.503304 } },
		{ title: 'Czech Republic', position: { lat:49.817492, lng:15.472962 } },
		{ title: 'Germany', position: { lat:51.165691, lng:10.451526 } },
		{ title: 'Mexico City', position: { lat:19.432608, lng:-99.133208 } },
		{ title: 'Honduras', position: { lat:15.199999, lng:-86.241905 } },
		{ title: 'Belize', position: { lat:17.189877, lng:-88.497650 } },
		{ title: 'New York City', position: { lat:40.714353, lng:-74.005973 } },
		{ title: 'California', position: { lat:36.778261, lng:-119.417932 } },
		{ title: 'Baton Rouge', position: { lat:30.458283, lng:-91.140320 } },
		{ title: 'Peru', position: { lat:-9.189967, lng:-75.015152 } },
		{ title: 'Bolivia', position: { lat:-16.290154, lng:-63.588653 } },
		{ title: 'Ottawa', position: { lat:45.421530, lng:-75.697193 } },
		{ title: 'Montreal', position: { lat:45.508670, lng:-73.553992 } },
		{ title: 'Toronto', position: { lat:43.653226, lng:-79.383184 } },
		{ title: 'Vancouver', position: { lat:49.261226, lng:-123.113927 } }
	];

	// Map options
	var map_id  = '#map-canvas';
	var lat     = 46.87916;
	var lng     = -3.32910;
	var zoom    = 2;

	return {
		init: function() {
			
			var map     = new google.maps.Map($(map_id)[0], {
				zoom : zoom,
			    center : new google.maps.LatLng(lat, lng),
			    mapTypeId : google.maps.MapTypeId.ROADMAP,
			    styles: [{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":20}]},{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f49935"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#fad959"}]}]
			});

			// Add each location to map
			angular.forEach(locations, function(value) {
				var marker = new google.maps.Marker({
					title: value.title,
					position: new google.maps.LatLng(value.position.lat, value.position.lng),
					icon: '../img/footprint.png',
					map: map
				});
			});

			return map;
		}
	};
});