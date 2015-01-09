'use strict';

app.controller('CategoryCtrl', ['$scope', 'categoryService', function ($scope, categoryService) {

    categoryService.getAllCategories()
    .$promise
    .then(function (data) {
        $scope.categories = data;
    });

    $scope.categoryClicked = function (categoryClickedId) {
        $scope.selectedCategoryId = categoryClickedId;
    }

}]);