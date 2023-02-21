const controller = {
    getProducts: (req, res) => {
        res.status(200).json({
            message: 'Products were fetched',
        });
    },

    getProduct: (req, res) => {
        res.status(200).json({
            message: 'Product details',
            productId: req.params.id,
        });
    },

    createProduct: (req, res) => {
        res.status(201).json({
            message: 'Product was created',
        });
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
