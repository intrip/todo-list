angular.module('todoApp')

    .directive('itemDetail', function () {
        return {
//            replace: true,
            restrict: 'E',
            templateUrl: 'todo/item-detail.html',
            link: function(scope, element, attrs) {


                //TODO branch out in f-api, remove all the logic for hierarchy except the one to render that,
                // then do the add new btn that add the item on top and calls the api after
                // then implement on the backend the change_parent api, the list as embedded
                // the normal list of items and work with the api and angular:
                // so that you can use nested sets or something else for hierarchy
            }
        };
    });