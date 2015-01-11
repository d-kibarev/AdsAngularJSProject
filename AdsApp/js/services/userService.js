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

        getUserAds: function (params) {

            var defer = $q.defer();
            var request = {
                method: 'GET',
                headers: headers,
                params: params,
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
        },

        deactivateUserAd: function (adId, success, error) {
            
            var request = {
                method: 'PUT',
                headers: headers,
                url: baseUrl + 'user/ads/deactivate/' + adId
            };

            $http(request).success(function (data) {
                success(data);
            }).error(error);
        },

        deleteUserAd: function (adId, success, error) {

            var request = {
                method: 'DELETE',
                headers: headers,
                url: baseUrl + 'user/ads/' + adId
            };

            $http(request).success(function (data) {
                success(data);
            }).error(error);
        },

        publishAgain: function (adId, success, error) {

            var request = {
                method: 'PUT',
                headers: headers,
                url: baseUrl + 'user/ads/publishagain/' + adId
            };

            $http(request).success(function (data) {
                success(data);
            }).error(error);
        }
    }
}]);