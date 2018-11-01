const AssetModel = require("../model/AssetModel");

exports.index = function(req, res) {
  AssetModel.get(function(err, assets) {
    console.log(req.query);
    if (err) {
      res.json({
        status: "500",
        message: err,
      });
    } else {
      res.json({
        status: "200",
        message: "Assets retrieved successfully!!!!",
        data: assets
      });
    }
  });
};

exports.new = function(req, res) {
  if (req.body.location == null || req.body.status == null || req.body.unit == null ||
    req.body.width == null || req.body.height == null || req.body.depth == null
  ) {
    return res.json({
      status: "400",
      message: "Bad Request",
    });
  }

  let asset = new AssetModel();
  asset.name = req.body.name;
  asset.location = req.body.location;
  asset.status = req.body.status;
  asset.unit = req.body.unit;
  asset.width = req.body.width;
  asset.height = req.body.height;
  asset.depth = req.body.depth;
  asset.advertisements = req.body.advertisements;
  asset.save(function(err) {
    if (err) {
      res.json({
        status: "500",
        message: err,
      });
    } else {
      res.json({
        status: "200",
        message: "New Shopping centre created!",
        data: asset
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

exports.view = function(req, res) {
  AssetModel.findById(req.params.asset_id, function(err, asset) {
    if (err) {
      status: "500"
      res.json(err);
    }
    else {
      res.json({
        status: "200",
        message: "Asset details loading..",
        data: asset
      });
    }
  });
};

exports.update = function(req, res) {
  AssetModel.findById(req.params.asset_id, function(err, asset) {
    if (err) {
      res.json({
        status: "500",
        message: err,
      });
    } else {
      asset.location = req.body.location ? req.body.location : asset.location;
      asset.status = req.body.status ? req.body.status : asset.status;
      asset.unit = req.body.unit ? req.body.unit : asset.unit;
      asset.width = req.body.width ? req.body.width : asset.width;
      asset.height = req.body.height ? req.body.height : asset.height;
      asset.depth = req.body.depth ? req.body.depth : asset.depth;
      asset.advertisements = req.body.advertisements ? req.body.advertisements : asset.advertisements;

      asset.save(function(err) {
        if (err) {
          res.json({
            status: "500",
            message: err,
          });
        } else
          res.json({
            status: "200",
            message: "Asset Info updated",
            data: asset
          });
      });
    }
  });
};

exports.delete = function(req, res) {
  AssetModel.remove({
    _id: req.params.asset_id
  }, function(err, unit) {
    if (err) {
      res.json({
        status: "500",
        message: err,
      });
    } else {
      res.json({
        status: "200",
        message: "Asset deleted"
      });
    }
  });
};