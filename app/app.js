'use strict';

// Declare app level module which depends on views, and components
angular.module('calcApp', [
  'ngRoute',
  'main',
  'core'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/main'});
}]);
