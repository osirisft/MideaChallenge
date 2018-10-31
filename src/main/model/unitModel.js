let mongoose = require("mongoose");
let schemaUnit = require("./schema/schemaUnit");
let unitSchema = mongoose.Schema(schemaUnit);
// Export Contact model
let Unit =  mongoose.model("unit", unitSchema);
module.exports = Unit;
module.exports.get = function (callback) {
    Unit.find(callback);
}
