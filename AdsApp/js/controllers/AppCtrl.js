'use strict';

app.controller('AppCtrl',
    function ($scope, $location, authService, notyService) {
        $scope.authService = authService;

        $scope.logout = function () {
            authService.logout();
            notyService.showInfo("Logout successful");
            $location.path('/');
        };
    }
);
