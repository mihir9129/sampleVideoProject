'use strict';

/**
 * @ngdoc function
 * @name sampleProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sampleProjectApp
 */
angular.module('sampleProjectApp')
        .controller('MainCtrl', function ($scope, $rootScope, $location) {
            $scope.login = function () {
                if ($scope.userName == "test" && $scope.pass == "test") {
                    $location.path("/home");
                    $rootScope.activeUser = $scope.userName;
                } else if ($scope.userName == "root" && $scope.pass == "root") {
                    $location.path("/about");
                    $rootScope.activeUser = $scope.userName;
                } else {
                    alert("Please enter correct username and password.");
                    return false;
                }

            };
            this.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
        });
