const controller = {
    getOrders: (req, res) => {
        res.status(200).json({
            message: 'Orders fetched',
        });
    },

    getOrder: (req, res) => {
        res.status(200).json({
            message: 'Order fetched',
            orderId: req.params.id,
        });
    },

    getOrdersByUser: (req, res) => {
        res.status(200).json({
            message: 'Orders fetched by user',
            userId: req.params.user_id,
        });
    },

    createOrder: (req, res) => {
        res.status(201).json({
            message: 'Order created',
        });
    },

    updateOrder: (req, res) => {
        res.status(200).json({
            message: 'Order updated',
            orderId: req.params.id,
        });
    },

    deleteOrder: (req, res) => {
        res.status(200).json({
            message: 'Order deleted',
            orderId: req.params.id,
        });
    },
};

module.exports = controller;
