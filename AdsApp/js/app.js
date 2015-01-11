'use strict';

var app = angular.module('adsApp', ['ngRoute', 'ngResource', 'ui.bootstrap.pagination']);

app.constant('baseUrl', 'http://softuni-ads.azurewebsites.net/api/');
app.constant('pageSize', 2);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
    });
    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
    });
    $routeProvider.when('/register', { 
        templateUrl: 'templates/register.html',
        controller: 'RegisterCtrl'
    });
    $routeProvider.when('/user/ads/publish', {
        templateUrl: 'templates/publish-new-ad.html',
        controller: 'PublishNewAdCtrl'
    });
    $routeProvider.when('/user/ads', {
        templateUrl: 'templates/user-ads.html',
        controller: 'UserAdsCtrl'
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });
}]);