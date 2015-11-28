angular.module('todoApp')

    .factory('nestedItems', function () {
        var searchItem = function (id, items) {
            for (var i = 0; i < items.length; i++) {
                if (items[i].id === id) {
                    return items[i];
                }
                else if (items[i].items && items[i].items.length > 0) {
                    if(item = searchItem(id, items[i].items))
                        return item;
                }
            }
            return null;
        };
        buildNestedItems = function ($scope) {
            var nestedList = [];
            var itemCopy = angular.copy($scope.items);

            var i = 0;
            var total_found = 0;
            while (total_found < itemCopy.length) {
                // skip found items
                if(itemCopy[i] == "found"){
                    i++;
                    continue;
                }
                // reset at end
                if( i >= itemCopy.length)
                {
                    i = 0;
                    continue;
                }
                if (itemCopy[i].parent_id === null) {
                    nestedList.push(itemCopy[i]);
                    itemCopy[i] = "found";
                    total_found++;
                }
                else if (res = searchItem(itemCopy[i].parent_id, nestedList)) {
//                    console.log(res);
                    res.items = res.items || [];
                    res.items.push(itemCopy[i]);
                    itemCopy[i] = "found";
                    total_found++;
                }
//                console.log(itemCopy[i].parent_id, itemCopy);
                i++;
            }
            $scope.nestedItems = nestedList;

//            console.log("completed: ", $scope.nestedItems);
//            console.log($scope.items);
        }


        return {
            build: buildNestedItems,
            searchItem: searchItem
        };
    });
