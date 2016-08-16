// Initialize the app
var twtApp = angular.module('twtApp', ['ngRoute']);

twtApp.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'views/home.html',
		controller: 'homeCtrl'
	});

	// :searchTerm <- : indicates a variable, 
	// requires $routeParams in controller
	$routeProvider.when('/:searchTerm', {
		templateUrl: 'views/home.html',
		controller: 'homeCtrl'
	});

	// $routeProvider.otherwise('/'); //Default
})

