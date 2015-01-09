app.controller('PublicAdsCtrl', ['$scope', 'adService', function myfunction($scope, adService) {
    adService.getAllAds()
    .$promise
    .then(function (data) {
        $scope.adsData = data;
    });
}]);