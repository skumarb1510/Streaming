(function(){
var app = angular.module("testApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/resources/templates/index.html"
    }).when("/test", {
        templateUrl : "/resources/templates/Test.html"
    }).when("/dummy", {
        templateUrl : "/resources/templates/Test.html"
    });
})
})()