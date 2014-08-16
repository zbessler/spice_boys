/* Controllers */

angular.module('Spice.controllers', [])
  .controller('Main', ['$scope','$routeParams', function($scope, $routeParams) {
    $scope.aboutH1 = 'ABOUT US';
    $scope.aboutP1 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
    $scope.aboutH2 = 'HISTORY';
    $scope.aboutP2 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
    $scope.aboutImg1 = 'img/boys_suits.jpg';
    Parse.initialize("rKS4FvpPwIN1sCSe9jzclbCHT7dU9Bc6yb1aYTxo", "k7xpt81zqRsx57ITWPgqsB2SL4JO2pvJLWo8j6mx");
    var Wine = Parse.Object.extend("Wine");
    var w = {
      name: 'Huulllo?',
      desc: 'Pale yellow in color, with ripe citrus notes and juicy tropical aromas. Fresh acidity with bright lemon and grapefruit flavors which are ripe and refreshing on the palate. Crisp and delightful with a smooth, medium-body and elegant finish.',
      area: 'Valle del Rapel',
      vineyardName: 'Casablanca Valley, Chile',
      soil: 'Granitic with red clay, sandy loam and',
      elevation: '900 to 1300 feet',
      varietal: '100% Sauvignon Blanc',
      aging: '4 months on the lees',
      alcohol: '13.0%',
      pH: '3.3',
      acidity: '6.5 g/L'
    };
    //new Wine().save(w);

  }])
  .controller('Home', ['$scope','$rootScope' ,'$routeParams', function($scope, $rootScope, $routeParams) {

    $rootScope.product = 'Wines';
    $scope.productHeader = 'OUR WINES';
    $scope.aboutImg2 = 'img/old_equip.jpg';
    $rootScope.outfit = 'Spice Boys Vineyards';

    var wines = Parse.Object.extend("Wine");
    var query = new Parse.Query(wines);
    query.find({
      success: function(wines) {
        $scope.wines = wines;
        $scope.$apply();
      },
      error: function(object, error) {
        console.log(error);
      }
    });



  }])
  .controller('Beer', ['$scope','$rootScope' ,'$routeParams', function($scope, $rootScope, $routeParams) {

    $rootScope.product = 'Beers';
    $scope.productHeader = 'OUR BEERS';
    $scope.aboutImg2 = 'https://pug-o-matic.me/assets/pug-aed5ccffa1461fe081559c9b05afda98.png';
    $rootScope.outfit = 'Spice Boys Brewery';

  }])
  .controller('Boys', ['$scope', function($scope) {
    var a = 3;
  }]);