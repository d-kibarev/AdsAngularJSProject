app.controller('PublicAdsCtrl', ['$scope', 'adService', function myfunction($scope, adService) {
    $scope.isReady = false;
    adService.getAllAds()
    .$promise
    .then(function (data) {
        $scope.adsData = data;
        $scope.isReady = true;
    });
}]);