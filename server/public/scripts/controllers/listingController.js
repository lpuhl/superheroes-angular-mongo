myApp.controller("listingController", ["$scope", "$http", function($scope, $http) {
  console.log("heroes controller working!");
  $scope.newHero = {};
  $scope.heroes = [];

  $scope.powerNames = ['Invisibility', 'Flight', 'Super Speed', 'Heat Vision', 'Super Strength', 'Accelerated Healing', 'Power Blast', 'Animal Affinity'];

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
