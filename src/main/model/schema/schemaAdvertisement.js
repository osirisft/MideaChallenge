const mongoose = require("mongoose");
let schemaAdvertisement = {
  type: {
    type: String,
    required: true
  },
  content: String,
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }

};
module.exports = schemaAdvertisement;
