const ProductRepository = require("../repositories/products.repository");
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
    async getProductById (req, res) {
        let productId= req.params.pid
        try {
            const product = await productRepository.getProductById(productId);
            res.json(product)
        } catch (error) {
            console.log(error)
        }    
    }
    async addProduct({title, code, img, thumbnails, description}) {
    }
    async updateProduct () {

    }
    async deleteProductById() {

    }
}
module.exports = ProductController