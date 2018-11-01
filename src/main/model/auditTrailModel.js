let mongoose = require("mongoose");
let schemaAuditTrail = require("./schema/schemaAuditTrail");
let auditTrailSchema = mongoose.Schema(schemaAuditTrail);

let AuditTrail = mongoose.model("auditTrail", auditTrailSchema);
module.exports = AuditTrail
module.exports.get = function (callback, limit) {
    AuditTrail.find(callback).limit(limit);
}
