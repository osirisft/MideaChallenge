let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let dbConfig = require("./src/main/config/dbConfig");
let app = express();
let apiRoutes = require("./src/main/route/api-routes");

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

mongoose.connect(dbConfig.db);
var db = mongoose.connection;
var port = process.env.PORT || dbConfig.port;

app.get("/", (req, res) => res.send("Hello World with Express"));
app.use("/api", apiRoutes)
app.listen(port, function () {
    console.log("Running challenge on port " + dbConfig.port);
});
