The humbling learning experience
1. Naive impl, loop thru local list of products
   controller, ng-repeat
2. Modules, services, factory
   products resource is available in CartCtrl even if not injected (singleton in the app)
3. Routing, maps to one ng-view
   Just one view??
   TemplateUrl el template
4. Click handler, add to cart
    cart is a resource so we can share it between ctrls
5. Proper add to cart, add in multiple places -> refactor add-method to cart object
6. Node express backend, templateUrl in routes
7. Service, fetch from backend api

// TODO checkout form
// TODO directive for product

