const dotenv= require('dotenv')
dotenv.config()
module.exports= {
    port: process.env.PORT,
    mongo_Url: process.env.MONGO_URL,
    adminName: process.env.adminName,
    adminPassword: process.env.adminPassword}
