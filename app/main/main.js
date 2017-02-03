'use strict';

function MainController() {
}

angular.module('main', ['ngRoute', 'core'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/main', {
      templateUrl: 'main/main.html',
      controller: MainController
    });
  }]);
