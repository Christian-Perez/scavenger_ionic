// TODO
// break out getHunts into a Hunt Factory
// create an array of inputs / answers to compare
// use checkAnswer to determin if an answer is correct
// if correct, change style, increment progress, update database

angular.module('scavenger')
  .controller('AppController', AppController)

AppController.$inject = ['$http'] // refactor huntFactory
function AppController($http){
  var self = this
  // getHunt(2)
  // self.hunts = Hunt.hunts
  self.huntJSON = {}
  self.answerKey = []
  console.log('first: ', self.huntJSON)

  // ** break out into factory **
    $http
    .get('https://scavenger4.herokuapp.com/hunt_templates/' + '2') // return hunt_template json
    .then(function(response){
      self.huntJSON = response.data
      console.log('inside function: ', self.huntJSON.objectives[0].answer)
      // return response.data
      console.log('length: ', self.huntJSON.objectives.length)
      for(var i = 0; i < self.huntJSON.objectives.length; i++){
        self.answerKey.push(self.huntJSON.objectives[i].answer)
      }
      console.log('answer key: ', self.answerKey)
    })

  // getHunt()
  // console.log('response: ', getHunt(1))
  // console.log('after', self.huntJSON)

  // compare each inidivual answer to it's answerKey & do something if true/false
  // self.checkAnswer = checkAnswer
  // function checkAnswer(userAnswer, objectiveAnswer){
  //   if(userAnswer == objectiveAnswer){
  //     return true
  //   } else {
  //     return false
  //   }
  // }

} // appController
  // console.log('last ', self.huntJSON)
