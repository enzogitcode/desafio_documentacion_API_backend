const UserModel = require('../models/user.model')
const CartModel = require('../models/cart.model')
const UserRepository = require('../repositories/user.repository')
const userRepository = new UserRepository()
const createHash = require('../utils/hashbcrypt')
const isValidPassword = require('../utils/hashbcrypt')

class UserController {
    async register(req, res) {
        let { first_name, last_name, email, age, password, cart, role } = req.body
        try {
            const user = await userRepository.getUserByEmail({ email })
            if (user) {
                console.log("Ya hay un usuario registrado con ese email")
                return res.status(400).send("El usuario ya existe")
            }
            const newCart = new CartModel()
            await newCart.save()
            const newUser = new UserModel({
                first_name,
                last_name,
                email,
                age,
                password: createHash(),
                cart: newCart._id,
                role
            })
            await newUser.save()
            console.log("Nuevo usuario creado", newUser)
            res.redirect('api/users/profile')

        } catch (error) {
            console.log("Error al registrar el usuario", error)
            res.send(error)
        }
    }
    async login({ email, password }) {
        let { email, password } = req.body
        try {
            const user = await UserModel.findOne({ email })
            if (!user) {
                console.log("usuario no encontrado")
                res.json("usuario no encontrado")
            }
            const isValid = isValidPassword(password, usuarioEncontrado);
            if (!isValid) {
                return res.status(401).send("Contraseña incorrecta");
            }
            res.redirect('api/users/profile')
        } catch (error) {
            res.json(error)
        }

    }
    async profile() {
        
    }
    async logout() {

    }
    async admin() {

    }
}

module.exports = UserController
