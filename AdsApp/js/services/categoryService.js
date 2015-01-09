app.factory('categoryService', ['$resource', 'baseUrl', function ($resource, baseUrl) {
    var resource = $resource(baseUrl + 'categories');
    function getAllCategories() {
        return resource.query();
    }
    return {
        getAllCategories: getAllCategories
    };
}]);