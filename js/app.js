'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 
	'myApp.services', 
	'myApp.directives', 
	'myApp.controllers']).
config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/home',{
			templateUrl: 'partials/home.html', 
			controller: 'homeCtrl'
		})
		.when('/projects', {
			templateUrl: 'partials/projects.html', 
			controller: 'projectsCtrl'
		})
		.when('/contact', {
			templateUrl: 'partials/contact.html', 
			controller: 'contactCtrl'
		})
		.otherwise({
			redirectTo: '/home'
		});
}]);
