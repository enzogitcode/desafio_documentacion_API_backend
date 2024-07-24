const express = require('express')
const app = express()
const config = require('./config/config')
const { port } = config
require('./database')

const productRouter = require('./routes/product.router')
const cartRouter = require('./routes/cart.router')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./src/public'))

app.use('/api/products', productRouter)
app.use('/api/carts', cartRouter)
//app.use('/api/users', userRouter)

app.listen(port, () => { console.log(`Escuchando el puerto ${port}`); })

const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUiExpress = require('swagger-ui-express')

const swaggerOptions = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: "Documentación de Island E-commerce",
            description: "App de el E-commerce líder en venta de artículos electrónicos y soluciones informáticas"
        }
    },
    apis: ["./src/docs/**/*.yaml"]
}
const specs = swaggerJSDoc(swaggerOptions)
app.use("/apidocs", swaggerUiExpress.serve, swaggerUiExpress.setup(specs))

