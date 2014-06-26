'use strict';


// Declare app level module which depends on filters, and services
angular.module('Spice', [
  'ngRoute',
  'Spice.filters',
  'Spice.services',
  'Spice.directives',
  'Spice.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'Home'});
  $routeProvider.when('/boys', {templateUrl: 'partials/boys.html', controller: 'Boys'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
