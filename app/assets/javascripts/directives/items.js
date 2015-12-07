angular.module('todoApp')

    .directive('items', function () {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'todo/items.html',
            controller: function ($scope, itemRepository) {
                var setupOrderingFields = function(){
                    $scope.ordering = {};
                    $scope.ordering.fields = [
                        {label: "Scadenza", value: "due_date"},
                        {label: "Titolo", value: "title"},
                        {label: "Data di creazione", value: "created_at"},
                        {label: "Ultimo aggiornamento", value: "updated_at"}
                    ];
                    $scope.ordering.types = [
                        {label: "Crescente", value: "+"},
                        {label: "Decrescente", value: "-"}
                    ];
                    $scope.ordering.field = "due_date";
                    $scope.ordering.type = "-";
                    $scope.updateOrdering();
                };
                $scope.updateOrdering = function(){
                    var field = $scope.ordering.field;
                    var type =  $scope.ordering.type;
                    $scope.orderingFilter = type + field;
                };

                $scope.selectItem = function (item) {
                    $scope.selectedItem = item;
                };

                $scope.addItem = function(){
                    itemRepository.create().then(
                        function(item){ $scope.items.unshift(item.data);}
                    );
                };

                $scope.updateComplete = function(item){
                    itemRepository.update(item.id, item).then( function() {
                            $scope.refresh();
                    });
                };

                // filtering default options
                $scope.completeOptions = [
                    {label: "Da fare", value: false},
                    {label: "Completati", value: true},
                    {label: "Tutti", value: undefined},
                ];
                $scope.filter =  {"filter[completed]": false};

                $scope.refresh = function(){
                    itemRepository.all($scope.filter).then(function(items){$scope.items = items.data});
                };

                $scope.dateStatusClass = function(due_date){
                    if (due_date && new Date(due_date) < new Date())
                        return 'expired';
                    return '';
                };

                // init data
                $scope.refresh();
                setupOrderingFields();
            }
        };
    });