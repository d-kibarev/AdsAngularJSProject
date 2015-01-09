'use strict';

app.controller('TownCtrl', ['$scope', 'townService', function ($scope, townService) {
    
    townService.getTowns()
    .$promise
    .then(function (data) {
        $scope.towns = data;
    });
    
}]);