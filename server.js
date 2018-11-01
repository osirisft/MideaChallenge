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
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});


mongoose.connect(dbConfig.db);
var db = mongoose.connection;
var port = process.env.PORT || dbConfig.port;

app.get("/", (req, res) => res.send("Hello World with Express"));
app.use("/api", apiRoutes)
app.listen(port, function () {
    console.log("Running challenge on port " + dbConfig.port);
});
