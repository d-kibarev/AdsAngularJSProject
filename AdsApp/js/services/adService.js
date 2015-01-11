app.factory('adService', ['$resource', 'baseUrl', function ($resource, baseUrl) {
    var adsResource = $resource(baseUrl + 'ads', null,
            {
                'getAll': { method: 'GET' }
            }
        );

    //var resource = $resource(baseUrl + 'ads:adsId', { adId: '@id' }, {
    //    update: { method: 'PUT' }
    //});
    function getAllAds(params, success, error) {
        return adsResource.getAll(params, success, error);
    }
    return {
        getAllAds: getAllAds
    };
}]);