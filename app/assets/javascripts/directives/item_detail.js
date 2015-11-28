angular.module('todoApp')

    .directive('itemDetail', function (nestedItems) {
        return {
//            replace: true,
            restrict: 'E',
            templateUrl: 'todo/item-detail.html',
            link: function(scope, element, attrs) {
                scope.buildNestedItems = function(){
                    nestedItems.build(scope);
                }
            }
        };
    });