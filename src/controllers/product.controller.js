const ProductRepository = require("../repositories/product.repository");
const productRepository = new ProductRepository()

class ProductController {
    async getProducts(req, res) {
        try {
            const products = await productRepository.getProducts();
            res.json(products)

        } catch (error) {
            console.log(error)
        }
    }
    async getProductById(req, res) {
        let productId = req.params.pid
        try {
            const product = await productRepository.getProductById(productId);
            res.json(product)
        } catch (error) {
            console.log(error)
        }
    }
    async addProduct(req, res) {

    }
    async updateProductById(req, res) {


    }
    async deleteProductById(req, res) {

    }
}
module.exports = ProductController