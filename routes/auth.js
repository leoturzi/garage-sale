const express = require('express');
const router = express.Router();
const controller = require('../controllers')['auth'];
const { signupValidations } = require('../middleware/signup-mw');

router.post('/signin', controller.signin);

router.post('/signup', signupValidations, controller.signup);

router.post('/signout', controller.signout);

router.post('/reset-password', controller.forgotPassword);

module.exports = router;
