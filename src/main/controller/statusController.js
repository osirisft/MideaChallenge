const StatusModel = require("../model/statusModel");

exports.index = function(req, res) {
  StatusModel.get(function(err, status) {
    if (err) {
      res.json({
        status: "500",
        message: err,
      });
    } else {
      res.json({
        status: "200",
        message: "Status retrieved successfully!!!!",
        data: status
      });
    }
  });
};

exports.new = function(req, res) {
  let status = new StatusModel();
  status.statusCode = req.body.statusCode ? req.body.statusCode : status.statusCode;
  status.statusTxt = req.body.statusTxt;
  status.save(function(err) {
    if (err) {
      res.json({
        status: "500",
        message: err,
      });
    } else {
      res.json({
        status: "200",
        message: "New status created!",
        data: status
      });
    }
  });
}

exports.delete = function(req, res) {
  StatusModel.remove({
    _id: req.params.status_id
  }, function(err, status) {
    if (err) {
      res.json({
        status: "500",
        message: err,
      });
    } else {
      res.json({
        status: "200",
        message: "Status deleted"
      });
    }
  });
};
