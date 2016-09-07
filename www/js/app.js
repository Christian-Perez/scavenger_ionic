// angular.module('scavenger', ['ionic', '$stateProvider', '$urlRouterProvider', 'AppController'])
angular.module('scavenger', ['ionic', 'ui.router'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}) // .run()
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'AppController'
        })
        // .state('users', {
        //     url: '/users',
        //     templateUrl: 'templates/users.html',
        //     controller: 'UserController'
        // })
        // .state('user', {
        //     url: "/users/:userId",
        //     templateUrl: "templates/user.html",
        //     controller: "UserController"
        // });
    $urlRouterProvider.otherwise('/login');
});
