var express = require('express');
var GetPhones = require('../controllers/get-phones')
var AddPhone = require('../controllers/post-phone')
var router = express.Router();


router.get('/', GetPhones.getPhones);

router.post('/', AddPhone.addPhone);

module.exports = router;
