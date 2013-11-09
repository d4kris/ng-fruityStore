var resources = angular.module("fruity.resources", []);
resources.factory("products", function () {
    return [{
        'id' : 0,
        'name' : 'Limefrukt',
        'description' : 'Underbara limefrukter från Sydamerika',
        'inStock' : 20,
        'imgSrc' : 'lime.png'
    }, {
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
});
resources.factory("cart", ["products", function (products) {
    var cart = {};
    // the actual bag of fruits...
    cart.bag = {};
    // add method
    cart.addToCart = function (id) {
        var product, item;
        console.log("add to cart "+id);
        product = products[id];
        if (product.inStock < 1) {
            return;
        }
        // update product count
        product.inStock = product.inStock - 1;

        item = cart.bag[id];
        if (item) {
            // existing product in the cart
            item.count = item.count + 1;
        } else {
            // create new cart item
            item = {
                id    : product.id,
                name  : product.name,
                count : 1
            };
            cart.bag[product.id] = item;
        }
    }
    // remove method
    cart.removeFromCart = function (itemId) {
        var cartItem, product;
        cartItem = cart.bag[itemId];
        if (cartItem.count > 0) {
            cartItem.count = cartItem.count - 1;

            product = products[itemId];
            product.inStock = product.inStock + 1;
        }
    }
    return  cart;
}]);
