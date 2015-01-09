'use strict';
app.controller('RegisterCtrl', ['$scope', 'townService', function ($scope, townService) {
    $scope.headerTitle = 'Registration';

    townService.getTowns()
    .$promise
    .then(function (data) {
        $scope.towns = data;
    });

    $scope.register = function (user) {
        console.log(user);
    }
}]);