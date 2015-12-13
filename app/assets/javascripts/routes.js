angular.module('todoApp')

    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/todo', {
                    templateUrl: 'todo/index.html'
                })
                .otherwise({
                    redirectTo: '/todo'
                });
        }]);