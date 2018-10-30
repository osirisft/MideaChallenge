let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let app = express();
let apiRoutes = require("./src/main/route/api-routes");

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/mideachallenge");
var db = mongoose.connection;

var port = process.env.PORT || 8888;
app.get("/", (req, res) => res.send("Hello World with Express"));
// app.use("/api", apiRoutes)
app.listen(port, function () {
    console.log("Running challege on port " + port);
});
