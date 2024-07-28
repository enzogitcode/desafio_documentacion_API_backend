const express= require('express')
const router= express.Router()
const UserController= require('../controllers/user.controller')
const userController= new UserController()

router.post("/login", userController.login)
router.post("/register", userController.register)
router.get("/profile", userController.profile)

module.exports= router