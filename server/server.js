var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var routes = require("./routes");
var app = express();

app.use(cors());
app.use(bodyParser.urlencoded());

app.get("/products", routes.products.get);
app.get("/products/:id", routes.products.id.get);
app.get("/", routes.main.get);
app.get("*", routes.all.get);

app.listen(8080, onListen);

function onListen() {
	console.log(`Server is running on port ${this.address().port}`);
}