const { Router } = require('express')
const PostsController = require('../../controllers/posts.controller')
const router = Router()

const controller = new PostsController()

router.get('/', controller.getAllPosts)
router.get('/:id', controller.getPostById)
router.get('/user/:user_id', controller.getUserPosts)
router.post('/', controller.createPost)
router.post('/favorite', controller.markPostAsFavorite)
router.get('/favorite/:user_id', controller.getAllFavoritePosts)

module.exports = router