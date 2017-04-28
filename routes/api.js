var express = require('express');
var mainController = require('../controllers/mainController.js');
var router = express.Router();



/*
 * GET
 */

router.get('/stats/barchart/:promoId/:day/:month/:year', mainController.barchartStats);

/*
 * GET
 */

router.get('/stats/general/:promoId', mainController.generalStats);


/*
 * GET
 */

router.get('/promotion/:promoId', mainController.showPromotion);



/*
 * POST
 */

router.post('/promotion/', mainController.createUpdatePromotion);


/*
 * GET
 */

router.get('/available/:promoId', mainController.promotionIdAvailable);



/*
 * GET
 */

router.get('/promotions', mainController.getPromotions);


/*
 * POST
 */
router.post('/upload-image/promo', mainController.loadPromoImage);

/*
 * POST
 */
router.post('/upload-image/social', mainController.loadSocialImage);

module.exports = router;