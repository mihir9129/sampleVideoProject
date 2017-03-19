'use strict';

/**
 * @ngdoc overview
 * @name sampleProjectApp
 * @description
 * # sampleProjectApp
 *
 * Main module of the application.
 */
angular
  .module('sampleProjectApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularUtils.directives.dirPagination'
  ])
  .config(function ($routeProvider,$locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/home', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
	  // $locationProvider.html5Mode(true);
	  $locationProvider.hashPrefix('');
  });
