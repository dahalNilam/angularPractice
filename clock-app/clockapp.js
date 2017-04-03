var module = angular.module("clockApp", []);
module.controller("myClockCtrl", myClock);

function myClock($scope) {
    var date = new Date();
    $scope.timeString = date.toTimeString();
    $scope.userName = "";

    $scope.updateTime = function() {
        var date = new Date();
        $scope.timeString = date.toTimeString();
    }
}