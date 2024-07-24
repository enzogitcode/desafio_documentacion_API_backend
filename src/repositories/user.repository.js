const UserModel= require ('../models/user.model')

class UserRepository {
    async getUserByEmail(email) {
        return UserModel.findOne({email})
    }
}

module.exports= UserRepository