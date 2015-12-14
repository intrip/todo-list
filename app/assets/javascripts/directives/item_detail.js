angular.module('todoApp')

    .directive('itemDetail', function (itemRepository) {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'todo/item-detail.html',
            controller: function($scope){
                $scope.updated = false;
            },
            link: function(scope, element, attrs) {
                scope.flashSuccess = function(message) {
                    scope.flashMessage = message;
                    jQuery(".alert").show().delay(1000).fadeOut(1000);
                };

                scope.submit = function() {
                    scope.updating = true;
                    itemRepository.update(scope.selectedItem.id, scope.selectedItem).then(function(item){
                        scope.updating = false;
                        scope.flashSuccess('Salvataggio effettuato.');
                    });
                };
            }
        }
    });