const express = require('express');
const router = express.Router();
const controller = require('../controllers')['orders'];

router.get('/', controller.getOrders);

router.get('/:id', controller.getOrder);

router.get('/:user_id', controller.getOrdersByUser);

router.post('/', controller.createOrder);

router.put('/:id', controller.updateOrder);

router.delete('/:id', controller.deleteOrder);

module.exports = router;
