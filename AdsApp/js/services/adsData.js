app.factory('adsData', ['$resource', 'baseUrl', function ($resource, baseUrl) {
    var resource = $resource(baseUrl + 'ads:adsId', { adId: '@id' }, {
        update: { method: 'PUT' }
    });
    function getAllAds() {
        return resource.get();
    }
    return {
        getAllAds: getAllAds
    };
}]);