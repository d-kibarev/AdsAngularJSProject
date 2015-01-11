'use strict';
app.controller('RegisterCtrl', ['$scope', '$location', 'townService', 'authService', 'notyService',
    function ($scope, $location, townService, authService, notyService) {
    $scope.headerTitle = 'Registration';

    townService.getTowns()
    .$promise
    .then(function (data) {
        $scope.towns = data;
    });

    $scope.register = function (user) {
        if (user && user.username && user.password && user.name && user.phone && user.email && user.confirmPassword && user.town) {
            authService.register(user,
                function success() {
                    notyService.showInfo("User account created! You are logged.");
                    $location.path('/');
                },
                function error() {
                    notyService.showError("Registretion error!", err);
                }
                );
        }
    }
}]);