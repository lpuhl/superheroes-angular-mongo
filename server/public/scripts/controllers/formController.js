myApp.controller("formController", ["$scope", "$http", function($scope, $http) {
  console.log("heroes controller working!");
  $scope.newHero = {};
  $scope.heroes = [];

  $scope.powerNames = ['Invisibility', 'Flight', 'Super Speed', 'Heat Vision', 'Super Strength', 'Accelerated Healing', 'Power Blast', 'Animal Affinity'];

  // getHeroes();

  $scope.addHero = function() {
    var data = $scope.newHero;
    $http.post('/heroesroute', data)
      .then(function () {
        console.log('POST /heroes', data );
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
