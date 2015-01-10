app.controller('UserAdsCtrl', ['$scope', '$location', 'userService', 'notyService', function ($scope, $location, userService, notyService) {
    $scope.isReady = false;
    $scope.headerTitle = "My Ads";

    userService.getUserAds()
    .then(
            function (data) {
                $scope.myAdsData = data;
                $scope.isReady = true;
                console.log(data);
            },
            function (error) {
                console.log(error);
            });

    $scope.deactivateUserAd = function (adId) {
        userService.deactivateUserAd(adId,
            function success() {
                notyService.showInfo("Ad is deactivated.");
                $location.path("/user/ads");
        },
            function error() {
                notyService.showError("Deactivation ad error!", err);
            })
    },

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