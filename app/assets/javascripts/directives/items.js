angular.module('todoApp')

    .directive('items', function () {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'todo/items.html',
            controller: function ($scope, itemRepository) {
                $scope.refresh = function(){
                    itemRepository.all($scope.filter).then(function(items){$scope.items = items.data});
                };

                $scope.selectItem = function (item) {
                    $scope.selectedItem = item;
                };

                // init data
                $scope.refresh();
            }
        };
    });