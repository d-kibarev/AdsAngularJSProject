'use strict';
app.controller('LoginCtrl', ['$scope', '$location', 'authService', 'notyService', function ($scope, $location, authService, notyService) {
    $scope.headerTitle = 'Login';
    $scope.login = function (user) {
        authService.login(user,
            function success() {
                notyService.showInfo("Login successful");
                $location.path("/");
            },
            function error(err) {
                notyService.showError("Login failed", err);
            }
        );
    };
}]);