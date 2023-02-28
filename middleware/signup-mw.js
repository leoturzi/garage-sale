const { body, validationResult } = require('express-validator');

const signupValidations = [
    body('name')
        .notEmpty()
        .withMessage('Debes ingresar un Nombre')
        .bail()
        .isLength({ min: 2 })
        .withMessage('El nombre debe tener al menos 2 caracteres')
        .bail(),
    body('lastName')
        .notEmpty()
        .withMessage('Debes ingresar un Apellido')
        .bail()
        .isLength({ min: 2 })
        .withMessage('El nombre debe tener al menos 2 caracteres')
        .bail(),
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
        .bail()
        .isStrongPassword({
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 0,
        })
        .withMessage(
            'El password debe contener minimo 8 caracteres, 1 mayuscula, 1 minuscula y 1 numero'
        ),
];

module.exports = {
    signupValidations,
    signupValidationResult: validationResult,
};
