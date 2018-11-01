AuditTrailModel = require("../model/auditTrailModel");

exports.index = function(req, res) {
  AuditTrailModel.get(function(err, auditTrails) {
    console.log("start to get log");
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Audit Trails retrieved successfully!!!!",
      data: auditTrails
    });
  });
};
// Handle create contact actions
exports.new = function(data) {
  var auditTrail = new AuditTrailModel();
  auditTrail.changedBy = data.changedBy;
  auditTrail.operation = data.operation;
  auditTrail.changedModelName = data.changedModelName;
  auditTrail.changedModelField = data.changedModelField;
  auditTrail.oldValue = data.oldValue;
  auditTrail.newValue = data.newValue;

  auditTrail.save(function(err) {
    if (err)
      res.json(err);
    console.log("New audit trail created! Changed by " + auditTrail.changedBy);
  });
};