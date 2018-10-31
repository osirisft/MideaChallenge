let mongoose = require("mongoose");
let schema = require("./schema/schemaShoppingCentre");
let ShoppingCentreSchema = mongoose.Schema(schema);

let ShoppingCentre =  mongoose.model("shoppingCentre", ShoppingCentreSchema);
module.exports = ShoppingCentre;
module.exports.get = function (callback, limit) {
    ShoppingCentre.find(callback).limit(limit);
}
