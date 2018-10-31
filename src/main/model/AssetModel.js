const mongoose = require("mongoose");
const schema = require("./schema/schemaAsset");
const AssetSchema = mongoose.Schema(schema);

let Asset =  mongoose.model("asset", AssetSchema);
module.exports = Asset;
module.exports.get = function (callback, limit) {
    Asset.find(callback).limit(limit);
}
