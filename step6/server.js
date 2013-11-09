// create Express server
var Express = require("express");
var app = new Express();

// Some stuff from express that is nice to have
app.use(Express.bodyParser());
app.use(Express.methodOverride());
app.use(app.router);

// A simple error handler
function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.send(500, "Oops! An error occurred…");
}
// log all requests
function requestLogger(req, res, next) {
    console.log("%s %s", req.method, req.url);
    next();
}

app.use(requestLogger);
app.use(errorHandler);

// Serve static resources
app.use(Express.static(__dirname + "/app"));
app.use(Express.static(__dirname + "/../static"));

// import fruity api module
var FruityAPI = require("./fruityApi");
var api = new FruityAPI(app);

// publish our api
api.start();

// Start and listen on port 8888
app.listen(8888);
console.log("Fruity server started at 8888");