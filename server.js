var express = require("express"),
	morgan = require("morgan"),
	bodyParser = require("body-parser"),
	methodOverride = require("method-override"),
	port = process.env.PORT || 8080;

var app = express();

// config
app.use(morgan("dev")); // log every request to the console
app.use(bodyParser()); // pull information from html in POST
app.use(methodOverride()); // simulate DELETE and PUT
app.use(express.static(__dirname + "/app"));

app.get('/*', function(req, res) {
	res.redirect('index.html');
});

app.listen(port);
console.log("App Clistening on port " + port);