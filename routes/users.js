const express = require('express');
const router = express.Router();
const controller = require('../controllers')['users'];

router.get('/', controller.getUsers);

router.get('/:id', controller.getUser);

router.put('/:id', controller.updateUser);

router.delete('/:id', controller.deleteUser);

router.get('/:id/cart', controller.getCart);

router.put('/:id/cart', controller.updateCart);

router.get('/:id/order/', controller.getOrder);

router.get('/:id/orders', controller.getOrders);

module.exports = router;
