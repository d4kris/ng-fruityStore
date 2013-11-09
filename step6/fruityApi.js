var FruityApi = function(express_app) {
    this.app = express_app;
    this.response = function(response, data) {
        response.status(200);
        response.write(data);
        response.end();
    };
}

FruityApi.prototype.start = function() {
    var self = this;

    this.products = [{
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

    this.app.get('/api/products', function(req, res) {
        self.response(res, JSON.stringify(self.products));
    });

    this.app.get('/api/products/:id', function(req, res) {
        console.log('Get product with id %s', req.params.id);
        self.response(res, JSON.stringify(self.products[req.params.id]));
    });

    this.app.put('/api/products', function(req, res) {
        console.log('PUT new data: %s', req.body.name);
        var fruit = req.body;
        fruit.id = self.products.length;
        self.products.push(fruit);
        self.response(res, JSON.stringify(fruit));
    });

    this.app.put('/api/products/:id', function(req, res) {
        console.log('PUT data: [%s]:%s', req.params.id, req.body.name);
        var fruit = self.products[req.params.id];
        fruit.name = req.body.name;
        fruit.description = req.body.description;
        fruit.inStock = req.body.inStock;
        fruit.imgSrc = req.body.imgSrc;
        self.response(res, JSON.stringify(fruit));
    });

    this.app.post('/api/products', function(req, res) {
        console.log('Save product', req.params.id);
        if(req.params.id<self.products.length) throw new Error('Product with id %s already exists', req.params.id);
        self.response(res, JSON.stringify(self.products[0]));
        //self.products.push(req.params.id);
        //self.response(res, JSON.stringify(self.products[req.params.id]));
    });

    this.app.get('/api/carts/:id', function(req, res) {
        console.log('Get cart with id %s', req.params.id);
        self.response(res, 'Get cart');
    });
    
    this.app.post('/api/carts/:id/items', function(req, res) {
        console.log('Adding item to cart (%s)', req.params.id);
        self.response(res, 'Adding cart item');
    });
    
    this.app.delete('/api/cart/:id/items/:product_id', function(req, res) {
        console.log('Removing item (%s) from cart (%s)', req.params.product_id, req.params.id);
        self.response(res, 'Removed item cart');
    });

   this.app.post('/api/order', function(req, res) {
        console.log('Placing order');
        console.log(req.body);
        self.response(res, '');
    });
}

module.exports = FruityApi