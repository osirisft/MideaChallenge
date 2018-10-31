let schemaAuditTrail = {
    changedBy: {
        type: String,
        required: true
    },
    changedOn: {
        type: Date,
        default: Date.now
    },
    operation: {
        type: String,
        required: true
    },
    changedModelName: {
        type: String,
        required: true
    },
    changedModelField: {
        type: String,
        required: true
    },
    oldValue: String,
    newValue: String
};
module.exports = schemaAuditTrail;
