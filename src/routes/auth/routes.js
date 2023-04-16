const { Router } = require('express')
const AuthController = require('../../controllers/authController')
const router = Router()
const controller = new AuthController()

router.post('/login', controller.login)
router.post('/signup', controller.signUp)

module.exports = router