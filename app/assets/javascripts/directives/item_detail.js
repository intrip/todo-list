angular.module('todoApp')

    .directive('itemDetail', function ($filter) {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'todo/item-detail.html',
            controller: function($scope){
            },
            link: function(scope, element, attrs) {
            }
        }
    });