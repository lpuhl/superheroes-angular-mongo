myApp.controller("listingController", ["$scope", "$http", function($scope, $http) {
  console.log("listing controller working!");
  $scope.newHero = {};
  $scope.heroes = [];

  getHeroes();

  $scope.deleteHero = function(id) {
    $http.delete('/heroesroute/' + id)
      .then(function () {
        console.log('Hero DELETED:', id );
        getHeroes();
      });
  }

  // retrieve heroes from the server
  function getHeroes() {
    $http.get('/heroesroute').then(function(response) {
      console.log('data', response.data);
      $scope.heroes = response.data;
    });

  }
}]);
