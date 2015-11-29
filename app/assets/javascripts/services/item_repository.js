angular.module('todoApp')

.factory('itemRepository', function($http){
        var resourceUrl = '/api/todo';

        return {
            all: function() {
                return $http({method: 'GET', url: resourceUrl});
            },
            create: function() {
                return $http({method: 'POST', url: resourceUrl});
            }
        };
    });