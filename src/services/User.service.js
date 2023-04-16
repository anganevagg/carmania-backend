const User = require("../database/models/User.model")
const { hashPassword, comparePassword } = require("../helpers/HashPassword")
const HttpError = require('../helpers/HttpError')

class UserService {
  async createUser(email, password, first_name, last_name) {
    const userCreated = await User.create({
      email,
      password: await hashPassword(password),
      first_name,
      last_name
    })
    return userCreated
  }
  async checkUser(email, password) {
    const foundUser = await User.findOne({
      where: {
        email: email
      }
    })
    if (!(foundUser || await comparePassword(password, foundUser.password))) throw new HttpError('User or password is incorrect', 400)
    delete foundUser.dataValues.password
    return foundUser
  }
}

module.exports = UserService