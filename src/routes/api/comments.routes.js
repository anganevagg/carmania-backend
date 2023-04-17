const { Router } = require('express')
const CommentsController = require('../../controllers/comments.controller')
const router = Router()

const controller = new CommentsController()

router.get('/post/:post_id', controller.getAllCommentsByPostId)
router.post('/post/:post_id', controller.createComment)

module.exports = router