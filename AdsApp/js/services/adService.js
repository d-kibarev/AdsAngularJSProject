app.factory('adService', ['$resource', 'baseUrl', function ($resource, baseUrl) {
    var resource = $resource(baseUrl + 'ads:adsId', { adId: '@id' }, {
        update: { method: 'PUT' }
    });
    function getAllAds(params, success, error) {
        return resource.get(params, success, error);
    }
    return {
        getAllAds: getAllAds
    };
}]);