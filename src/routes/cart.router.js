const express= require('express')
const router= express.Router()
const CartController= require('../controllers/cart.controller')
const cartController= new CartController()

router.get("/:cid", cartController.getCartById)
router.post("/", cartController.newCart)
router.delete("/:cid", cartController.clearCart)
router.post("/:cid/products/:pid", cartController.addProduct)
//no funcionan
router.delete("/:cid/products/:pid", cartController.deleteProductById)
router.put("/:cid", cartController.updateProductById)
router.put("/:cid/products/:pid", cartController.updateQuantity)

router.post("/:cid/purchase", cartController.purchase)

module.exports= router