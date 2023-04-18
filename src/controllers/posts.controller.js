const PostsService = require("../services/Posts.service")

class PostsController {
  Service = new PostsService()
  getUserPosts = async (req, res, next) => {
    try {
      const { user_id } = req.params
      this.Service.getAllUserPosts(user_id)
    } catch (error) {
      next(error)
    }
  }
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
  markPostAsFavorite = async (req, res, next) => {
    try {
      const { user_id, post_id } = req.body
      const response = await this.Service.markPostAsFavoriteById(user_id, post_id)
      res.json({
        message: 'Added to favorite posts',
        data: response
      })
    } catch (error) {
      next(error)
    }
  }
  deleteFavoritePost = async (req, res, next) => {
    try {
      const { user_id, post_id } = req.body
      const response = await this.Service.deleteFavoritePost(user_id, post_id)
      res.json({
        message: 'Post marked as not favorite',
        data: {
          deleted: response
        }
      })
    } catch (error) {
      next(error)
    }
  }
  getAllFavoritePosts = async (req, res, next) => {
    try {
      const { user_id } = req.params
      const response = await this.Service.getAllFavoritePosts(user_id)
      res.json({
        message: 'All favorite posts',
        data: response
      })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = PostsController