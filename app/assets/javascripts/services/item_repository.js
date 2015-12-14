angular.module('todoApp')

.factory('itemRepository', function($http){
        var resourceUrl = '/api/todo';

        return {
            all: function(params) {
                params = params || {};
                return $http({method: 'GET', url: resourceUrl, params: params});
            }
        };
    });