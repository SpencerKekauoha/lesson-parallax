angular.module('vaderApp').service('mainService', function($http){

  this.getVader = function() {
    var baseUrl = "http://swapi.co/api/";
    return $http ({
      method: 'GET',
      url: baseUrl + 'people/4/'
    }).then(function(serverResponse){
      var response = serverResponse.data;
      return response;
    })
  }

})
