const PostsService = require("../services/Posts.service")

class PostsController {
  Service = new PostsService()
  createPost = async (req, res, next) => {
    try {
      const { title, content, user_id } = req.body
      const response = await this.Service.createPost(title, content, user_id)
      res.json({
        message: 'Post created',
        data: response
      })
    } catch (error) {
      next(error)
    }
  }
  getPostById = async (req, res, next) => {
    try {
      const { id } = req.params
      const response = await this.Service.getOnePostById(id)
      res.json({
        message: 'Get post',
        data: response
      })
    } catch (error) {
      next(error)
    }
  }
  getAllPosts = async (req, res, next) => {
    try {
      const response = await this.Service.getAllPosts()
      res.json({
        message: 'Get all posts',
        data: response
      })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = PostsController