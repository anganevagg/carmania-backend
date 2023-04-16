const { Router } = require('express')
const router = Router()

router.use('/posts', require('./posts.routes'))

module.exports = router