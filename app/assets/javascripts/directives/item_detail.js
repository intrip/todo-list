angular.module('todoApp')

    .directive('itemDetail', function ($filter, itemRepository) {
        return {
//            replace: true,
            restrict: 'E',
            templateUrl: 'todo/item-detail.html',
            link: function(scope, element, attrs) {
                scope.deleteItem = function (id){
                    itemRepository.delete(id).then( function(id){
                        for(var i= 0, len = scope.items.length; i<len; i++) {
                            if(scope.items[i].id === id)
                                scope.items.splice(i, 1);
                        }
                    });
                }
            }
        }
    });