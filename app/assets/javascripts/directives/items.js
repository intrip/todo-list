angular.module('todoApp')

    .directive('items', function () {
        return {
//            replace: true,
            restrict: 'E',
            templateUrl: 'todo/items.html',
            controller: function ($scope, itemRepository) {
                // init data
                itemRepository.all().then(function(items){$scope.items = items.data});

                $scope.selectItem = function (item) {
                    $scope.selectedItem = item;
                };

                $scope.addItem = function(){
                    itemRepository.create().then(
                        function(item){$scope.items.unshift(item);}
                    );
                };
            }
        };
    });