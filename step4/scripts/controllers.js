var controllers = angular.module("fruity.controllers", ["fruity.resources"]);
controllers.controller("ProductsCtrl", ["$scope", "products", function($scope, products) {
  $scope.products =  products;
}]);
controllers.controller("DetailsCtrl",
    ["$scope", "$routeParams", "products", "cart",
    function($scope, $routeParams, products, cart) {
        var id = $routeParams.id;
        console.log("details "+id);
        $scope.detail =  products[id];

        $scope.addToCart = function (id) {
            console.log("add to cart "+id);
            var product = products[id];
            var item = {
                id : product.id,
                name : product.name,
                count : 1
            };
            cart.push(item);
        }
    }
]);
controllers.controller("CartCtrl",
    ["$scope", "products", "cart",
    function($scope, products, cart) {
        console.log("new cart");
        $scope.cart = cart;
    }
]);