const UserModel = require('../models/user.model')
const UserRepository = require('../repositories/user.repository')

class UserController {
    async register(req, res) {
        let userData= req.body
        try {
            
        } catch (error) {
            
        }
    }
    async login({ email, password }) {
        let userData = req.body
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
}

