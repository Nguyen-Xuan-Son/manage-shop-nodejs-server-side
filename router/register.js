const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/register');

router.get('', controllers.register);

router.post('', controllers.registerPOST);

module.exports = router;
