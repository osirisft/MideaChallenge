let schemaStatus = {
    statusCode: {
        type: String,
        required: true
    },
    statusTxt: String,
    createdOn: {
      type: Date,
      default: Date.now
    }
};
module.exports = schemaStatus;
