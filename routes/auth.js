const express = require('express');
const router = express.Router();
const controller = require('../controllers')['auth'];

router.post('/signin', controller.signin);

router.post('/signup', controller.signup);

router.post('/signout', controller.signout);

router.post('/reset-password', controller.forgotPassword);

module.exports = router;
