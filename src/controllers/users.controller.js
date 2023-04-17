const UserService = require("../services/User.service")

class UsersController {
  Service = new UserService()
  updateUser = async (req, res, next) => {
    try {
      const { user_id } = req.params
      const { email, password, firts_name, last_name } = req.body
      const response = await this.Service.editUser(user_id, email, password, firts_name, last_name)
      res.json({
        message: 'Updated user',
        data: response
      })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = UsersController