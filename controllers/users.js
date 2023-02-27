const db = require('../models');

const controller = {
    getUsers: (req, res) => {
        res.status(200).json({
            message: 'Users were fetched',
        });
    },

    getUser: (req, res) => {
        res.status(200).json({
            message: 'User details',
            userId: req.params.id,
        });
    },

    createUser: async (req, res) => {
        const { username, name, lastName, email, password } = req.body;

        console.log(req.body);

        try {
            await db.User.create({
                username,
                name,
                lastName,
                email,
                password,
            });
        } catch (error) {
            return res.status(500).json({
                message: 'Error creating user',
                error,
            });
        }
        return res.status(201).json({
            message: 'User was created',
        });
    },

    updateUser: (req, res) => {
        res.status(200).json({
            message: 'User updated',
            userId: req.params.id,
        });
    },

    deleteUser: (req, res) => {
        res.status(200).json({
            message: 'User deleted',
            userId: req.params.id,
        });
    },

    getCart: (req, res) => {
        res.status(200).json({
            message: 'User cart',
            userId: req.params.id,
        });
    },

    updateCart: (req, res) => {
        res.status(200).json({
            message: 'User cart updated',
            userId: req.params.id,
        });
    },

    getOrder: (req, res) => {
        res.status(200).json({
            message: 'User order',
            userId: req.params.id,
        });
    },

    getOrders: (req, res) => {
        res.status(200).json({
            message: 'User orders',
            userId: req.params.id,
        });
    },
};

module.exports = controller;
