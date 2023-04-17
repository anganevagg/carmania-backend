const { Router } = require('express')
const UsersController = require('../../controllers/users.controller')
const router = Router()
const controller = new UsersController()

router.put('/:user_id', controller.updateUser)

module.exports = router