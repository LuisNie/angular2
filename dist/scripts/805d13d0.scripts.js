"use strict";angular.module("angular2App",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/chuck",{templateUrl:"views/chuck.html",controller:"ChuckCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("angular2App").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("angular2App").factory("gjson",["$http",function(a){return{getJoke:function(b){a.get("http://api.icndb.com/jokes/random/").success(b)}}}]).controller("ChuckCtrl",["$scope","gjson",function(a,b){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],b.getJoke(function(b){console.log("got some joke"),a.text=b.value.joke}),a.newJoke=function(){b.getJoke(function(b){console.log("got some joke"),a.text=b.value.joke})}}]);