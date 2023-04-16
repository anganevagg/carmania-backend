const UserService = require("../services/User.service")
const Users = require('../database/models/User.model')

class AuthController {
  Service = new UserService()
  login = async (req, res, next) => {
    try {
      const { email, password } = req.body
      const response = await this.Service.checkUser({
        email,
        password
      })
    } catch (error) {
      next(error)
    }
  }
  signUp = async (req, res, next) => {
    try {
      const { email, password, first_name, last_name } = req.body
      const userData = {
        email,
        password,
        first_name,
        last_name
      }
      const response = await this.Service.createUser(userData)
      res.json({
        message: 'User created',
        user: {
          id: response.id
        }
      })
    }
    catch (error) {
      next(error)
    }
  }
}

module.exports = AuthController