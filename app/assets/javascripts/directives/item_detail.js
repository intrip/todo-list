angular.module('todoApp')

    .directive('itemDetail', function (nestedItems) {
        buildNestedItems = function(nestedItems, $scope) {
            nestedItems.build($scope);
        }
        return {
//            replace: true,
            restrict: 'E',
            templateUrl: 'todo/item-detail.html',
            link: function(scope, element, attrs) {
                return {
                    buildNestedItems: buildNestedItems(nestedItems, scope)
                };
            }
        };
    });