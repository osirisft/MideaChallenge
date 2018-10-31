const UnitModel = require("../model/unitModel");

exports.index = function(req, res) {
  UnitModel.get(function(err, units) {
    if (err) {
      res.json({
        status: "500",
        message: err,
      });
    } else {
      res.json({
        status: "200",
        message: "Units retrieved successfully!!!!",
        data: units
      });
    }
  });
};

exports.new = function(req, res) {
  let unit = new UnitModel();
  unit.measureUnit = req.body.measureUnit ? req.body.measureUnit : unit.measureUnit;
  unit.unitTxt = req.body.unitTxt;
  unit.save(function(err) {
    if (err) {
      res.json({
        status: "500",
        message: err,
      });
    } else {
      res.json({
        status: "200",
        message: "New Unit created!",
        data: unit
      });
    }
  });

  // let data={
  //   "changedBy":"TBD user",
  //   "operation":"Create",
  //   "changedModelName":"Unit",
  //   "changedModelField":"measureUnit",
  //   "oldValue":"",
  //   "newValue":unit.measureUnit,
  // };
  // AuditTrailController.new(data);
}

exports.delete = function(req, res) {
  UnitModel.remove({
    _id: req.params.unit_id
  }, function(err, unit) {
    if (err) {
      res.json({
        status: "500",
        message: err,
      });
    } else {
      res.json({
        status: "200",
        message: "Unit deleted"
      });
    }
  });
};
