const db = require('../models');

const controller = {
    getProducts: async (req, res) => {
        try {
            const products = await db.Product.findAll();
            res.status(200).json({
                products,
                message: 'Products were fetched',
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Something went wrong',
            });
        }
    },

    getProduct: async (req, res) => {
        try {
            const product = await db.Product.findByPk(req.params.id);

            if (!product) {
                return res.status(404).json({
                    message: 'Product not found',
                });
            }
            res.status(200).json({
                product,
                message: 'Product details',
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Something went wrong',
            });
        }
    },

    createProduct: async (req, res) => {
        // TODO - validate req.body

        try {
            const product = await db.Product.create({
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                image: JSON.stringify(req.files),
                discount: req.body.discount,
                condition: req.body.condition,
                category: req.body.category,
            });

            return res.status(201).json({
                message: 'Product created',
                product: {
                    name: req.body.name,
                    price: req.body.price,
                    description: req.body.description,
                    image: req.files,
                    discount: req.body.discount,
                    condition: req.body.condition,
                    category: req.body.category,
                },
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Something went wrong',
            });
        }
    },

    updateProduct: (req, res) => {
        res.status(200).json({
            message: 'Product updated',
            productId: req.params.id,
        });
    },

    deleteProduct: (req, res) => {
        res.status(200).json({
            message: 'Product deleted',
            productId: req.params.id,
        });
    },
};

module.exports = controller;
