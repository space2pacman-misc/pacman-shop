var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var routes = require("./routes");
var app = express();

app.use(cors());
app.use(bodyParser.urlencoded());

app.listen(7777)

app.get("/", routes.home.get);