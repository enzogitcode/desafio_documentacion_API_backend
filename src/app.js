const express = require('express')
const app = express()
const config = require('./config/config')
const { port } = config
require('./database')

const productRouter= require('./routes/product.router')
const cartRouter= require('./routes/cart.router')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./src/public'))

app.use('/api/products', productRouter)
app.use('/api/carts', cartRouter)
//app.use('/api/users', userRouter)

app.listen(port, () => { console.log(`Escuchando el puerto ${port}`); })