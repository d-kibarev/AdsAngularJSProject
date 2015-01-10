app.controller('PublishNewAdCtrl', ['$scope', 'townService', 'categoryService', function myfunction($scope, townService, categoryService) {
    $scope.headerTitle = "Publish New Ad";
    $scope.towns = townService.getTowns();
    $scope.categories = categoryService.getAllCategories();

}]);