const express = require('express');
const router = express.Router();
const controller = require('../controllers')['auth'];
const { signupValidations } = require('../middleware/signup-mw');
const { signinValidations } = require('../middleware/signin-mw');

router.post('/signin', signinValidations, controller.signin);

router.post('/signup', signupValidations, controller.signup);

router.post('/reset-password', controller.forgotPassword);

module.exports = router;
