const express = require('express')
const app = express()
const config = require('./config/config')
const { port } = config
require('./database')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./src/public'))

const exphbs= require('express-handlebars')
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

const productRouter = require('./routes/product.router')
const cartRouter = require('./routes/cart.router')
const userRouter= require('./routes/user.router')
const viewsRouter= require('./routes/views.router')

app.use('/api/products', productRouter)
app.use('/api/carts', cartRouter)
app.use('/api/users', userRouter)
app.use('/', viewsRouter)

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
