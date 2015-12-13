angular.module('todoApp')
    .directive('formatDateTimeItalian', function ($filter) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attr, ngModel) {
                ngModel.$formatters.push(function (date) {
                    return $filter('date')(date, "dd/MM/yyyy HH:mm");
                });
            }
        };
    });