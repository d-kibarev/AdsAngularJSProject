app.controller('UserAdsCtrl', ['$scope', 'userService', function ($scope, userService) {
    $scope.isReady = false;
    $scope.headerTitle = "My Ads";

    userService.getUserAds()
    .then(
            function (data) {
                $scope.adsData = data;
                $scope.isReady = true;
            },
            function (error) {
                console.log(error);
            });
}]);