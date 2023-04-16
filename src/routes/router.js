const { Router } = require('express')
const router = Router()

router.use('/auth', require('./auth/routes'))
router.use('/api', require('./api/routes'))

router.get('/', (req, res, next) => {
  res.sendStatus(200)
})

module.exports = router