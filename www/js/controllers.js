// TODO
// break out getHunts into a Hunt Factory
// create an array of inputs / answers to compare
// use checkAnswer to determin if an answer is correct
// if correct, change style, increment progress, update database

angular.module('scavenger')
  .controller('AppController', AppController)
  .controller('HuntIndexController', HuntIndexController)

AppController.$inject = ['$http'] // refactor huntFactory
function AppController($http){
  var self = this
  // getHunt(2)
  // self.hunts = Hunt.hunts
  self.huntJSON = {}
  // self.answerKey = []
    $http
    .get('https://scavenger4.herokuapp.com/hunt_templates/' + '2') // return hunt_template json
    .then(function(response){
      self.huntJSON = response.data
      // self.huntJSON.objective.userAnswer = 'a' // *** objective is in an array
      for(var i = 0; i < self.huntJSON.objectives.length; i++){
        self.huntJSON.objectives[i].userAnswer = ""

      }
    })

  self.checkAnswer = function(userAnswer, objectiveAnswer, objectiveId){
    if(userAnswer.toUpperCase() == objectiveAnswer.toUpperCase()){
      console.log('true')
      console.log('objective.id: ', objectiveId)
      document.getElementById(objectiveId).className = 'completed'
      document.getElementById(objectiveId).innerHTML = 'completed'
      // update
      return true
    } else {
      console.log('false')
      return false
    }
  } // checkAnswer()
} // appController

HuntIndexController.$inject = ['$http']
function HuntIndexController($http){

}
