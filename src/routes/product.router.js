const express = require('express')
const router = express.Router()
const ProductController = require("../controllers/product.controller");
const productController = new ProductController()

router.get('/', productController.getProducts)
router.get("/:pid", productController.getProductById)
router.post ("/", productController.addProduct)
router.put("/:pid", productController.updateProductById)
router.delete("/:pid", productController.deleteProductById)


module.exports = router