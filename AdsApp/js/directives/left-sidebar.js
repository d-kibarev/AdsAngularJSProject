app.directive('leftSidebar', function () {
    return {
        controller: 'HomeCtrl',
        restrict: 'E',
        templateUrl: 'templates/directives/left-sidebar.html',
        replace: true
    };
});

app.directive('leftsidebarlogin', function () {
    return {
        controller: 'LoginCtrl',
        restrict: 'E',
        templateUrl: 'templates/directives/left-sidebar.html',
        replace: true
    };
});

app.directive('leftsidebarregister', function () {
    return {
        controller: 'RegisterCtrl',
        restrict: 'E',
        templateUrl: 'templates/directives/left-sidebar.html',
        replace: true
    };
});

app.directive('leftsidebarnewad', function () {
    return {
        controller: 'PublishNewAdCtrl',
        restrict: 'E',
        templateUrl: 'templates/directives/left-sidebar.html',
        replace: true
    };
});

app.directive('leftsidebaruserad', function () {
    return {
        controller: 'UserAdsCtrl',
        restrict: 'E',
        templateUrl: 'templates/directives/left-sidebar.html',
        replace: true
    };
});