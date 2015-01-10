app.controller('DeleteAdCtrl', ['$scope', '$location', 'userService', 'notyService', function ($scope, $location, userService, notyService) {
    $scope.headerTitle = "Delete Ad";


    $scope.deleteUserAd = function (adId) {
        userService.deleteUserAd(adId,
            function success() {
                notyService.showInfo("Ad is deleted.");
                $location.path("/user/ads");
            },
            function error() {
                notyService.showError("Error while deleting ad!", err);
            })
    }
}]);