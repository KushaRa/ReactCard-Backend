const express = require('express');
const router = express.Router();
const advertisementController = require('../controllers/advertisementController');

router.post('/submit-add', advertisementController.submitAdvertisement);

module.exports = router;