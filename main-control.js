var app = angular.module("routesExample");

app.controller('mainCtrl', function($scope, $location){
  $scope.go = function(){
    $location.path('/test/' + $scope.toGo);
  };
  $scope.someVariable = 'main control speaking';
});
