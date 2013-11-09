var controllers = angular.module("fruity.controllers", ["fruity.resources"]);
controllers.controller("ProductsCtrl", ["$scope", "products", function($scope, products) {
  $scope.products =  products;
}]);

var controllers2 = angular.module("fruity.controllers2", []);
controllers2.controller("CartCtrl", ["$scope", "products", function($scope, products) {
    $scope.products =  products;
}]);