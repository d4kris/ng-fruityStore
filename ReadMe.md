1. Naive impl, loop thru local list of products
   controller, ng-repeat
2. Modules, services, factory
   products resource is available in CartCtrl even if not injected (singleton in the app)
3. Routing, maps to one ng-view
   Just one view??
   TemplateUrl el template
4. Click handler, add to cart
    cart is a resource so we can share it between ctrls
5. Proper add to cart, add/remove in cart -> refactor add-method to cart object

// TODO form
// TODO service + fetch
// TODO directive for product

