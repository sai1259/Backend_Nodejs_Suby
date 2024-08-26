const vendorController = require('../controllers/vendorController');
const express = require('express');

const router = express.Router();

router.post('/register', vendorController.vendorRegistration);
router.post('/login', vendorController.vendorLogin)

router.get('/all-vendors', vendorController.getAllVendors);
router.get('/single-vendor/:apple', vendorController.getVendorById);

module.exports = router;
