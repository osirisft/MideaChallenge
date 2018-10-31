const mongoose = require("mongoose");
let schemaUser = {
  name: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  password: {
    type: string,
    required: true
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
};
module.exports = schemaUser;
