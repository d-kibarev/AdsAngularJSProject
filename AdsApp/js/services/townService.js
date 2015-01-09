app.factory('townService', ['$resource', 'baseUrl', function ($resource, baseUrl) {
    var resource = $resource(baseUrl + 'towns');
    function getTowns() {
        return resource.query();
    }
    return {
        getTowns:getTowns
    };
}]);