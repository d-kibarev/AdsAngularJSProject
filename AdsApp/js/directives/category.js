app.directive('category', function () {
    return {
        controller: 'CategoryCtrl',
        restrict: 'E',
        templateUrl: 'templates/directives/category.html',
        replace: true
    };
});