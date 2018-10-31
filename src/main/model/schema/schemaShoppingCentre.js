const mongoose = require("mongoose");
let schemaShoppingCentre = {
  name: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  postcode: Number,
  assets: [mongoose.Schema.Types.ObjectId],
  createdOn: {
    type: Date,
    default: Date.now
  }
};
module.exports = schemaShoppingCentre;
