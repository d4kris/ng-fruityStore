var routes = angular.module("fruity.routes", ["ngRoute"]);
routes.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
    .when("/products/:id", {
        //templateUrl: "views/details.html",
        template : "<h3>{{detail.name}}</h3>" +
            "<div><img src='../images/fruits/{{detail.imgSrc}}'/></div>" +
            "<div><h4>Beskrivning</h4>{{detail.description}}" +
            "<h5>I lager: <span id='inStock'>{{detail.inStock}}</span>" +
            "</div>" +
            "<button id='addButton' ng-click='addToCart({{detail.id}})' class='btn'>Lägg i korgen</button>",
        controller : "DetailsCtrl"
    })
    .otherwise({
        redirectTo : "/"
    });

}]);