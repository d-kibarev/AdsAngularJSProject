app.controller('PublicAdsCtrl', ['$scope', 'adsData', function myfunction($scope, adsData) {
    adsData.getAllAds()
    .$promise
    .then(function (data) {
        $scope.adsData = data;
    });
}]);