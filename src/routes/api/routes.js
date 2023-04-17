const { Router } = require('express')
const { route } = require('./posts.routes')
const router = Router()

router.use('/posts', require('./posts.routes'))
router.use('/comments', require('./comments.routes'))

module.exports = router