app.controller('PublicAdsCtrl', ['$scope', 'adService', function myfunction($scope, adService) {
    $scope.isReady = false;
    $scope.adsParams = {
        'startPage': 1,
        'pageSize': 10
    };

    $scope.reloadAds = function () {
        adService.getAllAds(
            $scope.adsParams,
            function success(data) {
                $scope.adsData = data;
                $scope.isReady = true;
            },
            function error(err) {
                notyService.showError("Cannot load ads", err);
            }
        );
    };

    $scope.reloadAds();

    $scope.$on("categorySelectionChanged", function (event, selectedCategoryId) {
        $scope.adsParams.categoryId = selectedCategoryId;
        $scope.adsParams.startPage = 1;
        $scope.reloadAds();
    });

    $scope.$on("townSelectionChanged", function(event, selectedTownId) {
        $scope.adsParams.townId = selectedTownId;
        $scope.adsParams.startPage = 1;
        $scope.reloadAds();
    });

}]);