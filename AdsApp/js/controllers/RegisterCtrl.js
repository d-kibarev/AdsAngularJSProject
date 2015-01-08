'use strict';
app.controller('RegisterCtrl', ['$scope', 'towns', function ($scope, towns) {
    $scope.headerTitle = 'Register';

    towns.getTowns()
    .$promise
    .then(function (data) {
        $scope.towns = data;
    });

    $scope.register = function (user) {
        console.log(user);
    }
}]);