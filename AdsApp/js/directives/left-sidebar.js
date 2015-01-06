app.directive('leftSidebar', function () {
    return {
        controller: 'HomeCtrl',
        restrict: 'E',
        templateUrl: 'templates/directives/left-sidebar.html',
        replace: true
    };
});