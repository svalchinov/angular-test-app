'use strict';

// Declare app level module
var myApp = angular.module('myApp', ['myApp.controllers', 'myApp.services', 'ui.bootstrap', 'LocalStorageModule']);
myApp.config(function($locationProvider, localStorageServiceProvider) {
	$locationProvider.html5Mode(true);
});

