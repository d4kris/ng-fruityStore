var routes = angular.module("fruity.routes", ["ngRoute"]);
routes.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
    .when("/products/:id", {
        templateUrl: "scripts/views/details.html",
        controller : "DetailsCtrl"
    })
    .otherwise({
        redirectTo : "/"
    });

}]);