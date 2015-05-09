var app = angular.module('routesExample');

app.controller('singleCtrl', function($scope, id){
  $scope.test = id;
});
