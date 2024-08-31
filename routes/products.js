const router = require('express').Router();
const productController = require('../controller/productController')

router.get('/', productController.getAllproduct)
router.post('/', productController.createProduct)
router.get('/search/:key', productController.searchProduct)
router.get('/:id', productController.getProduct)

module.exports = router