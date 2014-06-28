/* Controllers */

angular.module('Spice.controllers', [])
  .controller('Home', ['$scope', function($scope) {
    $scope.showWine = false;
  }])
  .controller('Boys', ['$scope', function($scope) {
    var a = 3;
  }]);