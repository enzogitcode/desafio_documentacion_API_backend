const ProductModel = require("../models/product.model")
const codigoMixto = require('../utils/randomcode')

class ProductRepository {
    async getProducts() {
        try {
            const products = await ProductModel.find()
            
            return products


        } catch (error) {
            console.log(error)
        }
    }
    async getProductById(id) {

        try {
            const product = await ProductModel.findById(id)
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
    async addProduct({ title, description, price, img, code, stock, category, thumbnails }) {
        try {
            if (!title || !description || !price || !stock || !category) {
                console.log("Todos los campos son obligatorios");
                return;
            }

            const existeProducto = await ProductModel.findOne({ code: code });

            if (existeProducto) {
                console.log("El código debe ser único");
                return;
            }

            const newProduct = new ProductModel({
                title,
                description,
                price,
                img,
                code: codigoMixto,
                stock,
                category,
                status: true,
                thumbnails: thumbnails || []
            });
            console.log(newProduct.code)
            await newProduct.save();

            console.log(newProduct)
            return newProduct;

        } catch (error) {
            console.log(error)
        }
    }

    async updateProduct(id, updatedProduct) {
        try {
            const product = await ProductModel.findByIdAndUpdate(id, updatedProduct);
            if (!product) {
                console.log("producto no encontrado")
                return null
            }

            console.log("producto actualizado")
            return product
        } catch (error) {
            console.log(error)
        }
    }
    async deleteProductById(id) {
        try {
            const deletedProduct = await ProductModel.findByIdAndDelete(id)
            if (!deletedProduct) {
                console.log("No se encontró un producto con ese Id")
            }
            console.log("Producto eliminado correctamente")
            return deletedProduct
        } catch (error) {
            console.log(error)
        }

    }

}



module.exports = ProductRepository