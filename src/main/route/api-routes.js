const router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
       status: 'API Its Working',
       message: 'Welcome!',
    });
});

const shoppingCentreController = require('../controller/shoppingCentreController');
router.route('/shoppingCentres')
    .get(shoppingCentreController.index)
    .post(shoppingCentreController.new);
router.route('/shoppingCentres/:shoppingCentre_id')
    .get(shoppingCentreController.view)
    .patch(shoppingCentreController.update)
    .put(shoppingCentreController.update)
    .delete(shoppingCentreController.delete);

const unitController = require('../controller/unitController');
router.route('/units')
        .get(unitController.index)
        .post(unitController.new);
router.route('/units/:unit_id')
        .delete(unitController.delete);

module.exports = router;
