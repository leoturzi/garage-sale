const db = require('../models');
const { hashPassword, comparePassword } = require('../utils/auth');

// middelwares
const { signupValidationResult } = require('../middleware/signup-mw');
const { signinValidationResult } = require('../middleware/signin-mw');

const controller = {
    signin: async (req, res) => {
        const validationResult = signinValidationResult(req);
        if (validationResult.errors.length > 0) {
            return res.status(422).json({
                status: 'error',
                message: 'La validacion fallo',
                errors: validationResult.errors.map((error) => {
                    return {
                        status: 'error',
                        field: error.param,
                        message: error.msg,
                    };
                }),
            });
        }

        const { email, password } = req.body;

        // check if user exists
        const userInDb = await db.User.findOne({
            where: {
                email,
            },
        });

        if (!userInDb) {
            return res.status(422).json({
                status: 'error',
                message: 'Credenciales invalidas',
            });
        }

        // check if password is correct
        if (!comparePassword(password, userInDb.password)) {
            return res.status(422).json({
                status: 'error',
                message: 'Credenciales invalidas',
            });
        }

        res.status(200).json({
            message: 'Login successful',
        });
    },

    signup: async (req, res) => {
        const validationResult = signupValidationResult(req);
        if (validationResult.errors.length > 0) {
            // validation
            return res.status(422).json({
                status: 'error',
                message: 'La validacion fallo',
                errors: validationResult.errors.map((error) => {
                    return {
                        status: 'error',
                        field: error.param,
                        message: error.msg,
                    };
                }),
            });
        }

        const { name, lastName, email, password } = req.body;

        // check if user exists
        const userInDb = await db.User.findOne({
            where: {
                email,
            },
        });

        if (userInDb) {
            return res.status(422).json({
                status: 'error',
                message: 'User already exists',
            });
        }

        try {
            await db.User.create({
                name,
                lastName,
                email,
                password: hashPassword(password),
            });
        } catch (error) {
            return res.status(500).json({
                status: 'error',
                message: 'Error creating user',
                error,
            });
        }
        return res.status(201).json({
            status: 'success',
            message: 'User was created',
        });
    },

    forgotPassword: (req, res) => {
        res.status(200).json({
            status: 'success',
            message: 'Forgot password',
        });
    },
};

module.exports = controller;
