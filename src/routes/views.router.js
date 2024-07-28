const express = require('express')
const router= express.Router()
const exphbs = require('express-handlebars')
const ViewsController= require('../controllers/view.controller')
const viewController= new ViewsController()

router.get("/login", viewController.renderLogin)
router.get("/register", viewController.renderRegister)

module.exports= router