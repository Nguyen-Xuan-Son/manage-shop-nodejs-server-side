const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/login');

router.get('', controllers.login);

router.post('', controllers.loginPOST);

module.exports = router;
