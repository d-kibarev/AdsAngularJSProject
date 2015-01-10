'use strict';
app.controller('RegisterCtrl', ['$scope', 'townService', 'authService', 'notyService', function ($scope, townService, authService, notyService) {
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
                    notyService.showInfo("Ad is deactivating.");
                },
                function error() {
                    notyService.showError("Deactivation ad error! ", err);
                }
                );
        }
    }
}]);