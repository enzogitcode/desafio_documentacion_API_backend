const express = require('express')
const app = express()
const config = require('./config/config')
const { port } = config
require('./database')

//requires routes
const productRouter= require('./routes/product.router')

const exphbs = require('express-handlebars')
//configuro el engine //que motor utilizaremos
app.engine('handlebars', exphbs.engine())
//en qué parte de nuestra app estarán las views
app.set('views', '.src/views')
//indicamos que queremos renderizar con handlebars
app.set('view engine', 'handlebars')

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./src/public'))

//routes

app.use('/api/products', productRouter)
//app.use('/api/carts', cartRouter)
//app.use('/api/users', userRouter)

app.listen(port, () => { console.log(`Escuchando el puerto ${port}`); })