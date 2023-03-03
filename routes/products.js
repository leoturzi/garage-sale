const express = require('express');
const router = express.Router();
const controller = require('../controllers')['products'];
const uploadFiles = require('../middleware')['multer'];

router.get('/', controller.getProducts);

router.get('/:id', controller.getProduct);

router.post('/', uploadFiles, controller.createProduct);

router.put('/:id', controller.updateProduct);

router.delete('/:id', controller.deleteProduct);

module.exports = router;
