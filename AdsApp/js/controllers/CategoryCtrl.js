'use strict';

app.controller('CategoryCtrl', ['$scope', '$rootScope', 'categoryService', function ($scope, $rootScope, categoryService) {

    categoryService.getAllCategories()
    .$promise
    .then(function (data) {
        $scope.categories = data;
    });

    $scope.categoryClicked = function (categoryClickedId) {
        $scope.selectedCategoryId = categoryClickedId;
        $rootScope.$broadcast("categorySelectionChanged", categoryClickedId);
    }

}]);