app.factory('userService', ['$http', 'baseUrl', 'authService', function ($http, baseUrl, authService) {
    var headers = authService.getAuthHeaders();

    return {

        createNewAd: function (adData, success, error) {
            var request = {
                method: 'POST',
                headers: headers,
                url: baseUrl + 'user/ads',
                data: adData
            };

            $http(request).success(function (data) {
                success(data);
            }).error(error);
        }
    };
}]);