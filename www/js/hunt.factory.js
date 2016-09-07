angular.module('scavenger')
  .factory('Hunt', Hunt)

Hunt.$inject = ['$http']

function Hunt($http){
  return {
    // get the hunts
    // hunts: "Testing 321"

    // hunts: function(){
    //   $http
    //   .get('https://scavenger4.herokuapp.com/hunts')
    //   .then(function(response){
    //     this.hunt = response.data.hunt_template_id
    //   });
    // } // hunts:

  } // return
}
