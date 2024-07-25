const express= require('express')
const router = express.Router()
const CartController= require( '../controllers/cart.controller')
const cartController = new CartController

//funcionan
router.post("/", cartController.newCart)
router.get("/:cid", cartController.getCartById)
router.post("/:cid/products/:pid", cartController.addProducts)
//no funcionan
router.delete("/:cid", cartController.clearCart) //no actualiza las cantidades el carrito
router.put("/:cid/products/:pid", cartController.updateQuantity)
router.delete("/:cid/products/:pid", cartController.deleteProduct) //no elimina el producto

router.put("/:cid", cartController.updateCart) //me da un producto como null

router.post("/:cid/purchase", cartController.purchase)

module.exports= router