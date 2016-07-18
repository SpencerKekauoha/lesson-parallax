angular.module('vaderApp').controller('mainCtrl', function($scope, mainService){

  $scope.hiVader = mainService.getVader().then(function(results){
    $scope.vader = results;
    console.log($scope.vader);
  })

})
