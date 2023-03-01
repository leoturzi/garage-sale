const { body, validationResult } = require('express-validator');

const signinValidations = [
    body('email')
        .notEmpty()
        .withMessage('Debes ingresar un email')
        .bail()
        .isEmail()
        .withMessage('Debes ingresar un email Valido')
        .bail(),
    body('password')
        .notEmpty()
        .withMessage('Debes ingresar un password')
        .bail(),
];

module.exports = {
    signinValidations,
    signinValidationResult: validationResult,
};
