angular.module('todoApp')

    .directive('items', function () {
        return {
//            replace: true,
            restrict: 'E',
            templateUrl: 'todo/items.html',
            controller: function ($scope) {
                $scope.nestedItemList = function(items) {
                    var nestedList = [];

                    angular.forEach(items, function(item, key) {
                        this.push(item);
                    }, nestedList);


//                    for(var key in items){
//                        var item = items[key];
//                        if(item.parent_id !== null) {
//                            // move the item to his parent
//                        }
//                        else
//                        {
//                            //just add the item as his position
//                            nestedList.push[item];
//                            console.log("here", nestedList);
//                        }
//                    }
//                    console.log(nestedList);
                    return nestedList;
                }

                $scope.items = [
                    {
                        id: 1,
                        parent_id: null,
                        title: "titolo1",
                        description: "description1",
                        body: "html text",
                        order: 1,
                        completed: false,
                        created_at: "2015-11-24 12:40:06",
                        updated_at: "2015-11-24 12:40:06",
                        due_date: "2015-11-24 12:40:06"
                    },
                    {
                        id: 2,
                        parent_id: 1,
                        title: "titolo2",
                        description: "description2",
                        body: "html text",
                        order: 2,
                        completed: true,
                        created_at: "2015-11-24 12:40:06",
                        updated_at: "2015-11-24 12:40:06",
                        due_date: "2015-11-24 12:40:06"
                    },
                    {
                        id: 3,
                        parent_id: 2,
                        title: "titolo3",
                        description: "description3",
                        body: "html text",
                        order: 3,
                        completed: false,
                        created_at: "2015-11-24 12:40:06",
                        updated_at: "2015-11-24 12:40:06",
                        due_date: "2015-11-24 12:40:06"
                    },
                    {
                        id: 4,
                        parent_id: null,
                        title: "titolo4",
                        description: "description4",
                        body: "html text",
                        order: 4,
                        completed: false,
                        created_at: "2015-11-24 12:40:06",
                        updated_at: "2015-11-24 12:40:06",
                        due_date: "2015-11-24 12:40:06"
                    }];

                $scope.selectItem = function(item) {
                    $scope.selectedItem = item;
                }
            }
        };
    });