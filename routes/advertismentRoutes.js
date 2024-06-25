const express = require('express');
const router = express.Router();
const advertisementController = require('../controller/advertismentController');

router.post('/submit-add', advertisementController.submitAdvertisement);
router.get('/display-add', advertisementController.displayAdvertisements);
router.get('/display-add/:id', advertisementController.getAdvertisementById);

module.exports = router;
