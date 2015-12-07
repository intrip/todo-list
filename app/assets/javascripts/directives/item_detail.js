angular.module('todoApp')

    .directive('itemDetail', function ($filter, $timeout, itemRepository) {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'todo/item-detail.html',
            controller: function($scope){
                $scope.updated = false;
            },
            link: function(scope, element, attrs) {
                scope.deleteItem = function (id){
                    if ( ! confirm("Sei sicuro di cancellare questo elemento?"))
                        return;
                    itemRepository.delete(id).then( function(){
                        for(var i= 0, len = scope.items.length; i<len; i++) {
                            if(scope.items[i].id === id){
                                scope.items.splice(i, 1);
                                break;
                            }
                        }
                    });
                }
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