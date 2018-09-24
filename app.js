(function () {
//use strict helps us from making mistakes, returns errors
'use strict';

var myFirstApp = angular.module('myFirstApp', [])
    //Used for some tests
    myFirstApp.controller('myFirstController', function ($scope) {
        $scope.firstname = "Juhan";
        $scope.surname = "";
        $scope.email = "test@gmail.com";
        $scope.function1 = function(){
            return("Return from function1")
        };
    });

})();