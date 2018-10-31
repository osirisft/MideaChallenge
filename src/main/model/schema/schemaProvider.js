const mongoose = require("mongoose");
let schemaProvider = {
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
};
module.exports = schemaProvider;
