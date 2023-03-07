const db = require('../models');
const fs = require('fs');
const path = require('path');

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
                message: 'Something went wrong while fetching products',
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

        const images = req.files.map((file) => file.filename);

        try {
            const product = await db.Product.create({
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                image: JSON.stringify(images),
                discount: req.body.discount,
                condition: req.body.condition,
                category: req.body.category,
            });

            return res.status(201).json({
                message: 'Product created',
                product,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Something went wrong while creating product',
            });
        }
    },

    updateProduct: (req, res) => {
        res.status(200).json({
            message: 'Product updated',
            productId: req.params.id,
        });
    },

    deleteProduct: async (req, res) => {
        try {
            const product = await db.Product.findByPk(req.params.id);

            if (!product) {
                return res.status(404).json({
                    message: 'Product not found',
                });
            }

            // TODO - delete images from public/images/products

            const imagesToDelete = JSON.parse(product.image);

            imagesToDelete.forEach(async (image) => {
                await fs.unlink(
                    path.join(__dirname, `../public/images/products/${image}`),
                    (err) => {
                        if (err) {
                            console.log(err);
                        }
                    }
                );
            });

            await product.destroy();

            res.status(200).json({
                message: 'Product deleted',
                product,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Something went wrong while deleting product',
            });
        }
    },
};

module.exports = controller;
