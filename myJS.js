var module = angular.module("myApp", []);
module.controller("MainCtrl", Main);

function Main() {
    console.log("Main Called by Angular Controller");
}