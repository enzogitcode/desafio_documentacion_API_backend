const express= require('express')
const router = express.Router()
const CartController= require( '../controllers/cart.controller')
const cartController = new CartController

//funcionan
router.post("/", cartController.newCart)
router.get("/:cid", cartController.getCartById)
router.post("/:cid/products/:pid", cartController.addProducts)
router.delete("/:cid/products/:pid", cartController.deleteProduct)
router.delete("/:cid", cartController.clearCart)
//no funcionan
router.put("/:cid/products/:pid", cartController.updateQuantity)

router.put("/:cid", cartController.updateCart) //me da un producto como null

router.post("/:cid/purchase", cartController.purchase)

module.exports= router