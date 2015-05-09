var app = angular.module("routesExample");

app.service('dataService', function($timeout, $q){
  
  this.getData = function(id){
    var deferred = $q.defer();
    $timeout(function(){
      deferred.resolve(id);
    }, 1500)
    return deferred.promise;
  }

});
