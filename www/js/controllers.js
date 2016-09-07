// angular.module('scavenger')
//   .controller('AppController', ['$scope', function($scope) {
//     // var self = this
//
//     $scope.something = 'koala'
//   }])


angular.module('scavenger')
  .controller('AppController', AppController)

  AppController.$inject = ['$http', 'Hunt'] // refactor huntFactory

  function AppController($http, Hunt){
    var self = this
    getHunts()
    // self.hunts = Hunt.hunts
    self.huntJSON = {}
    self.huntName = self.huntJSON.name
    self.huntDescription = 'huntName'
    // self.huntDescription = self.huntJSON.description
    self.huntDuration = self.huntJSON.duration_min
    self.huntObjectives = self.huntJSON.objectives

    self.something = 'testing .. 123'

    // hunts: function(){
    function getHunts(){
      $http
      .get('https://scavenger4.herokuapp.com/hunt_templates/1') // return hunt_template json
      .then(function(response){
        self.huntJSON = response.data // return name as placeholder
      });
    }
  }
