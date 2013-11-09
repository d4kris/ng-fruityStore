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
            cart.addToCart(id);
        }
    }
]);
controllers.controller("CartCtrl",
    ["$scope", "products", "cart",
    function($scope, products, cart) {
        console.log("new cart");
        $scope.cart = cart;

        $scope.addToCart = function (id) {
            cart.addToCart(id);
        }
        $scope.removeFromCart = function (itemId) {
            cart.removeFromCart(itemId);
        }

    }
]);