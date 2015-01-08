app.directive('leftSidebar', function () {
    return {
        controller: 'HomeCtrl',
        restrict: 'E',
        templateUrl: 'templates/directives/left-sidebar.html',
        replace: true
    };
});

app.directive('leftSidebar1', function () {
    return {
        controller: 'LoginCtrl',
        restrict: 'E',
        templateUrl: 'templates/directives/left-sidebar.html',
        replace: true
    };
});

app.directive('leftSidebar2', function () {
    return {
        controller: 'RegisterCtrl',
        restrict: 'E',
        templateUrl: 'templates/directives/left-sidebar.html',
        replace: true
    };
});