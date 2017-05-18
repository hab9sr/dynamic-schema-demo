var myApp = angular.module("dsView", []);

myApp.controller("dsViewController", ["$scope", function($scope) {

  $scope.books = [
    {
      title: "Programming the World Wide Web",
      edition: 8,
      author: "Robert W. Sebesta",
      isbn: "978-0-13-377598-3",
      internalId: 1
    },
    {
      title: "Deep Work",
      edition: 1,
      author: "Cal Newport",
      isbn: "978-1455586691",
      internalId: 2
    }
  ];

  $scope.booksStr = JSON.stringify($scope.books, null, 1);

  $scope.userType = "student";

}]);
