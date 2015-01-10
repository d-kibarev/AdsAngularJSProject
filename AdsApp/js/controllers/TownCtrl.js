'use strict';

app.controller('TownCtrl', ['$scope', '$rootScope', 'townService', function ($scope, $rootScope, townService) {
    
    townService.getTowns()
    .$promise
    .then(function (data) {
        $scope.towns = data;
    });
    
    $scope.townClicked = function (townClickedId) {
        $scope.selectedTownId = townClickedId;
        $rootScope.$broadcast("townSelectionChanged", townClickedId);
    }
}]);