const router = require('express').Router();

router.get('/', function(req, res) {
  res.json({
    status: 'API Its Working',
    message: 'Welcome!',
  });
});

// route for shopping centre
const shoppingCentreController = require('../controller/shoppingCentreController');
router.route('/shoppingCentres')
  .get(shoppingCentreController.index)
  .post(shoppingCentreController.new);
router.route('/shoppingCentres/:shoppingCentre_id')
  .get(shoppingCentreController.view)
  .patch(shoppingCentreController.update)
  .put(shoppingCentreController.update)
  .delete(shoppingCentreController.delete);

// route for asset
const assetController = require('../controller/assetController');
router.route('/assets')
  .get(assetController.index)
  .post(assetController.new);
router.route('/assets/:asset_id')
  .get(assetController.view)
  .patch(assetController.update)
  .put(assetController.update)
  .delete(assetController.delete);


const auditTrailController = require('../controller/auditTrailController');
router.route('/auditTrails')
  .get(auditTrailController.index)
  .post(auditTrailController.new);

const unitController = require('../controller/unitController');
router.route('/units')
  .get(unitController.index)
  .post(unitController.new);
router.route('/units/:unit_id')
  .delete(unitController.delete);

const statusController = require('../controller/statusController');
router.route('/status')
  .get(statusController.index)
  .post(statusController.new);
router.route('/status/:status_id')
  .delete(statusController.delete);


module.exports = router;