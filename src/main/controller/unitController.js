UnitModel = require("../model/unitModel");
AuditTrailController = require("../controller/auditTrailController");

exports.index = function (req, res) {
    UnitModel.get(function (err, units) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Units retrieved successfully!!!!",
            data: units
        });
    });
};

exports.new = function (req, res) {
    var unit = new UnitModel();
    unit.measureUnit = req.body.measureUnit ? req.body.measureUnit : unit.measureUnit;
    unit.unitTxt = req.body.unitTxt;

    unit.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: "New Unit created!",
            data: unit
        });
    });

    let data={
      "changedBy":"TBD user",
      "operation":"Create",
      "changedModelName":"Unit",
      "changedModelField":"measureUnit",
      "oldValue":"",
      "newValue":unit.measureUnit,
    };
    AuditTrailController.new(data);
};
// Handle view Unit info
exports.view = function (req, res) {
    UnitModel.findById(req.params.Unit_id, function (err, unit) {
        if (err)
            res.send(err);
        res.json({
            message: "Unit details loading..",
            data: unit
        });
    });
};
// Handle update Unit info
exports.update = function (req, res) {
  UnitModel.findById(req.params.measureUnit, function (err, unit) {
        if (err)
            res.send(err);

        unit.measureUnit = req.body.measureUnit ? req.body.measureUnit : unit.measureUnit;
        unit.unitTxt = req.body.unitTxt;

        // save the Unit and check for errors
        unit.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: "Unit Info updated",
                data: unit
            });
        });
    });
};
// Handle delete Unit
exports.delete = function (req, res) {
    UnitModel.remove({
        _id: req.params.measureUnit
    }, function (err, Unit) {
        if (err)
            res.send(err);
            res.json({
            status: "success",
            message: "Unit deleted"
        });
    });
};
