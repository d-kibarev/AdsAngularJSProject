app.controller('UserAdsCtrl', ['$scope', '$location', 'userService', 'notyService', function ($scope, $location, userService, notyService) {
    $scope.isReady = false;
    $scope.headerTitle = "My Ads";

    $scope.loadUserAds = function () {

        userService.getUserAds()
        .then(
                function (data) {
                    $scope.myAdsData = data;
                    $scope.isReady = true;
                },
                function (error) {
                    console.log(error);
                });
    };

    $scope.loadUserAds();

    $scope.deactivateUserAd = function (adId) {
        userService.deactivateUserAd(adId,
            function success() {
                notyService.showInfo("Ad is deactivated.");
                $scope.isReady = false;
                $scope.loadUserAds();
        },
            function error() {
                notyService.showError("Deactivation ad error!", err);
            })
    },

    $scope.deleteUserAd = function (adId) {
        userService.deleteUserAd(adId,
            function success() {
                notyService.showInfo("Ad is deleted.");
                $scope.isReady = false;
                $scope.loadUserAds();
            },
            function error() {
                notyService.showError("Error while deleting ad!", err);
            })
    }
}]);