var myApp = angular.module("dsController", ["ngResource"]);

myApp.controller("dsControllerController", ["$scope", "$resource", function($scope, $resource) {

  $scope.vType = "car";
  $scope.vehiclesStrArr  = [];

  var url = 'http://localhost:3000';
  var Car = $resource(url);
  $scope.car = { vType: "car" };
  var Truck = $resource(url);
  $scope.truck = { vType: "truck" };

  $scope.createVehicle = function(vehicle) {
    var newVehicle;
    if (vehicle.vType == "car") {
      newVehicle = new Car(vehicle);
    }
    if (vehicle.vType == "truck") {
      newVehicle = new Truck(vehicle);
    }
    newVehicle.$save(function(savedVehicle) {
      var vStr = JSON.stringify(savedVehicle, null, 1);
      alert('created ' + savedVehicle.vType + '!\n' + vStr);
      $scope.vehiclesStrArr.push(vStr);
    });
  };

}]);
