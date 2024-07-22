const express = require('express')
const router = express.Router()
const ProductController = require("../controllers/product.controller");
const productController = new ProductController()

router.get('/', productController.getProducts)
router.get("/:pid", productController.getProductById)
router.put("/:pid", productController.updateProductById)
router.post ("/", productController.addProduct)
router.delete("/:pid", productController.deleteProductById)


module.exports = router