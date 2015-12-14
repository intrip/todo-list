angular.module('todoApp')

    .directive('items', function () {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'todo/items.html',
            controller: function ($scope) {
                $scope.items = [
                    {
                        "id": 23,
                        "title": "ruby",
                        "description": "ruby is beatiful",
                        "body": "",
                        "completed": false,
                        "due_date": "2015-12-13",
                    },
                    {
                        "id": 24,
                        "title": "javascript",
                        "description": "javascript is beatiful",
                        "body": "",
                        "completed": false,
                        "due_date": "2015-12-13"
                    }
                ];

                $scope.selectItem = function (item) {
                    $scope.selectedItem = item;
                };
            }
        };
    });