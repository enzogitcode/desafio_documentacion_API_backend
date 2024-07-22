const mongoose = require('mongoose')

const configObject = require('./config/config.js')
const { mongo_Url } = configObject

mongoose.connect(mongo_Url)
    .then(() => console.log("conectados a la db"))
    .catch((error) => console.log(error))
