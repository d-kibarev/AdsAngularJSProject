'use strict';

app.controller('TownCtrl', ['$scope', 'townService', function ($scope, townService) {
    
    townService.getTowns()
    .$promise
    .then(function (data) {
        $scope.towns = data;
    });
    
    $scope.townClicked = function (townClickedId) {
        $scope.selectedTownId = townClickedId;
    }
}]);