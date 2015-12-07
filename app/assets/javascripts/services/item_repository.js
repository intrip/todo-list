angular.module('todoApp')

.factory('itemRepository', function($http){
        var resourceUrl = '/api/todo';

        return {
            all: function(params) {
                params = params || {};
                return $http({method: 'GET', url: resourceUrl, params: params});
            },
            create: function() {
                return $http({method: 'POST', url: resourceUrl});
            },
            delete: function(id) {
                return $http({method: 'DELETE', url: resourceUrl + "/" + id});
            },
            update: function(id, data) {
                return $http({method: 'PUT', url: resourceUrl + "/" + id, data: data});
            }
        };
    });