app.directive('town', function () {
    return {
        controller: 'TownCtrl',
        restrict: 'E',
        templateUrl: 'templates/directives/town.html',
        replace: true
    };
});