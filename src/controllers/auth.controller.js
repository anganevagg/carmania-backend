const UserService = require("../services/User.service")

class AuthController {
  Service = new UserService()
  login = async (req, res, next) => {
    try {
      const { email, password } = req.body
      const response = await this.Service.checkUser(
        email,
        password
      )
      res.json({
        message: 'Logged in',
        data: {
          id: response.id
        }
      })
    } catch (error) {
      next(error)
    }
  }
  signUp = async (req, res, next) => {
    try {
      const { email, password, first_name, last_name } = req.body
      const response = await this.Service.createUser(email, password, first_name, last_name)
      res.json({
        message: 'User created',
        data: {
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