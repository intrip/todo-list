angular.module('todoApp')

.factory('nestedItems', function () {
    buildNestedItems = function($scope) {
        var searchItem = function(id, items) {
            for(var i= 0; i < items.length; i++)
            {
                if(items[i].items && items[i].items.length > 0) {
                    return searchItem(id, items[i].items);
                }
                else if(items[i].id === id) {
                    return items[i];
                }
            }
        };

        var nestedList = [];
        var itemCopy = angular.copy($scope.items);

        var i= 0;
        while(i < itemCopy.length){
            if(itemCopy[i].parent_id === null) {
                nestedList.push(itemCopy[i]);
            }
            else if (res = searchItem(itemCopy[i].parent_id, nestedList)) {
                res.items = res.items || [];
                res.items.push(itemCopy[i]);
            }
            i++;
        }
        console.log($scope.nestedItems);
        $scope.nestedItems = nestedList;
    }

    return {
        build: buildNestedItems
    };
});
