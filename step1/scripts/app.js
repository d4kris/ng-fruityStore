var app = {};
app.products = [{
    'id' : 0,
    'name' : 'Limefrukt',
    'description' : 'Underbara limefrukter från sydamerika',
    'inStock' : 20,
    'imgSrc' : 'lime.png'
},{
    'id' : 1,
    'name' : 'Äpplen',
    'description' : 'Fina svenska äpplen',
    'inStock' : 70,
    'imgSrc' : 'apple.png'
}, {
    'id' : 2,
    'name' : 'Bananer',
    'description' : 'Bananer från Brasilien',
    'inStock' : 50,
    'imgSrc' : 'banana.png'
}, {
    'id' : 3,
    'name' : 'Mango',
    'description' : 'Fina fräsha Mangos',
    'inStock' : 1,
    'imgSrc' : 'mango.png'
}, {
    'id' : 4,
    'name' : 'Kiwi',
    'description' : 'Färska Kiwifrukter',
    'inStock' : 10,
    'imgSrc' : 'kiwi.png'
}];

function ProductsCtrl($scope) {
  $scope.products = app.products;
}