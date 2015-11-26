angular.module('todoApp')

    .directive('itemDetail', function () {
        return {
//            replace: true,
            restrict: 'E',
            templateUrl: 'todo/item-detail.html',
            controller: function (){
            }
        };
    });