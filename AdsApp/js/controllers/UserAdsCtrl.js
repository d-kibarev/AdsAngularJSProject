app.controller('UserAdsCtrl', ['$scope', 'userService', 'notyService', function ($scope, userService, notyService) {
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
            notyService.showInfo("User account created! Please login.");
        },
            function error() {
                notyService.showError("Registretion error! ", err);
            })
        console.log(adId);
    }
}]);