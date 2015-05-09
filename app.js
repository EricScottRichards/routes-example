var app = angular.module('routesExample', ['ngRoute']);

app.config(function($routeProvider){
  
  $routeProvider
    .when('/', {
      templateUrl: 'templates/home/home-view.html', // The literal path to the template, from the index.html
      controller: 'homeCtrl' // The name of the controller 
    })
    .when('/test', {
      templateUrl: 'templates/test/test-view.html',
      controller: 'testCtrl'
    })
    .when('/test/:id', {
      templateUrl: 'templates/test/single/single-view.html',
      controller: 'singleCtrl',
      resolve: {
        id: function($route, dataService){
          return dataService.getData($route.current.params.id);
        }
      }
    })
    .otherwise({
      redirectTo: '/'
    })

});
