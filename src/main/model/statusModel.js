let mongoose = require("mongoose");
let schema = require("./schema/schemaStatus");
let StatusSchema = mongoose.Schema(schema);
// Export Contact model
let Status =  mongoose.model("status", StatusSchema);
module.exports = Status;
module.exports.get = function (callback) {
    Status.find(callback);
}
