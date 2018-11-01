const mongoose = require("mongoose");
let schemaAsset = {
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  status: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  width: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  depth: {
    type: Number,
    required: true
  },
  unit: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  advertisements: [mongoose.Schema.Types.ObjectId],
  createdOn: {
    type: Date,
    default: Date.now
  }
};
module.exports = schemaAsset;