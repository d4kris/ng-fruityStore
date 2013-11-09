var controllers = angular.module("fruity.controllers", ["fruity.resources"]);
controllers.controller("ProductsCtrl", ["$scope", "products", function($scope, products) {
  $scope.products =  products;
}]);
controllers.controller("DetailsCtrl",
    ["$scope", "$routeParams", "products",
    function($scope, $routeParams, products) {
  var id = $routeParams.id;
  console.log("details");
  $scope.detail =  products[id];
}]);
controllers.controller("CartCtrl", ["$scope", "products", function($scope, products) {
  console.log("cart");
  $scope.products =  products;
}]);