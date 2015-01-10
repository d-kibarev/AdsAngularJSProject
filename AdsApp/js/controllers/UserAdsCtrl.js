app.controller('UserAdsCtrl', ['$scope', 'userService', function ($scope, userService) {
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
}]);