const ShoppingCentreModel = require("../model/shoppingCentreModel");

exports.index = function(req, res) {
  ShoppingCentreModel.get(function(err, shoppingCentres) {
    if (err) {
      res.json({
        status: "500",
        message: err,
      });
    } else {
      res.json({
        status: "200",
        message: "Shopping centres retrieved successfully!!!!",
        data: shoppingCentres
      });
    }
  });
};

exports.new = function(req, res) {
  if (req.body.name == null || req.body.city == null || req.body.address == null) {
    return res.json({
      status: "400",
      message: "Bad Request",
    });
  }

  let shoppingCentre = new ShoppingCentreModel();
  shoppingCentre.name = req.body.name,
    shoppingCentre.city = req.body.city,
    shoppingCentre.address = req.body.address,
    shoppingCentre.postcode = req.body.postcode,
    shoppingCentre.save(function(err) {
      if (err) {
        res.json({
          status: "500",
          message: err,
        });
      } else {
        res.json({
          status: "200",
          message: "New Shopping centre created!",
          data: shoppingCentre
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
  ShoppingCentreModel.findById(req.params.shoppingCentre_id, function(err, shoppingCentre) {
    if (err) {
      status: "500"
      res.json(err);
    }
    else {
      res.json({
        status: "200",
        message: "Shopping centre details loading..",
        data: shoppingCentre
      });
    }
  });
};

exports.update = function(req, res) {
  ShoppingCentreModel.findById(req.params.shoppingCentre_id, function(err, shoppingCentre) {
    if (err) {
      res.json({
        status: "500",
        message: err,
      });
    } else {
      shoppingCentre.name = req.body.name ? req.body.name : shoppingCentre.name;
      shoppingCentre.city = req.body.city ? req.body.city : shoppingCentre.city;
      shoppingCentre.address = req.body.address ? req.body.address : shoppingCentre.address;
      shoppingCentre.postcode = req.body.postcode ? req.body.postcode : shoppingCentre.postcode;

      shoppingCentre.save(function(err) {
        if (err) {
          res.json({
            status: "500",
            message: err,
          });
        } else
          res.json({
            status: "200",
            message: "ShoppingCentre Info updated",
            data: shoppingCentre
          });
      });
    }
  });
};

exports.delete = function(req, res) {
  ShoppingCentreModel.remove({
    _id: req.params.shoppingCentre_id
  }, function(err, unit) {
    if (err) {
      res.json({
        status: "500",
        message: err,
      });
    } else {
      res.json({
        status: "200",
        message: "Shopping centre deleted"
      });
    }
  });
};
