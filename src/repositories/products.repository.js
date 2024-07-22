const ProductModel = require("../models/product.model")

class ProductRepository {
    async getProducts() {
        try {
            const products = await ProductModel.find().lean()
            return products

        } catch (error) {
            console.log(error)
        }
    }
    async getProductById(id) {

        try {
            const product = await ProductModel.findById(id).lean()
            if (!product) {
                console.log("producto no encontrado")
                return null
            }
            return product
        } catch (error) {
            console.log(error)
        }
        return product
    }
}
module.exports = ProductRepository