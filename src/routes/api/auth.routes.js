const { Router } = require('express')
const AuthController = require('../../controllers/authController')
const router = Router()
const authController = new AuthController()

router.post('/login', authController.login)
router.post('/signup', authController.signUp)

module.exports = router