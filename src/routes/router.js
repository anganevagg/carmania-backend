const { Router } = require('express')
const router = Router()

router.use('/', require('./api/auth.routes'))


module.exports = router