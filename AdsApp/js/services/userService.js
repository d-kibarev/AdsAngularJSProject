app.factory('userService', ['$http', '$q', 'baseUrl', 'authService', function ($http, $q, baseUrl, authService) {
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
        },

        getUserAds: function () {

            var defer = $q.defer();
            var request = {
                method: 'GET',
                headers: headers,
                url: baseUrl + 'user/ads'
            };

            $http(request)
                      .success(function (data, status, headers, config) {
                          defer.resolve(data);
                      })
             .error(function (data, status, headers, config) {
                 defer.reject(data);
             });

            return defer.promise;
        }
    }

}]);