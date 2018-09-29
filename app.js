(function () {
//use strict helps us from making mistakes, returns errors
'use strict';

var myFirstApp = angular.module('myFirstApp', [])
    myFirstApp.controller('myFirstController', function ($scope) {
        //Used for some tests
        $scope.firstname = "Juhan";
        $scope.surname = "";
        $scope.email = "test@gmail.com";
        $scope.function1 = function(){
            return("Return from function1")
        };
        
        //Name Calculator
        $scope.name = "";
        $scope.totalvalue = 0;
        $scope.displayNumberic = function () {
            var totalNameValue = calculateNumericForString($scope.name);
            //Update scope variable to local local variable
            $scope.totalvalue = totalNameValue;
        };

        function calculateNumericForString(string) {
            var totalStringValue = 0;
            for (var i = 0; i < string.length; i++) {
                totalStringValue += string.charCodeAt(i);
            }
            return totalStringValue;
        };

    });

})();