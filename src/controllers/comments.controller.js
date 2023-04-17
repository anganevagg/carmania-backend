const CommentsService = require("../services/Comments.service")

class CommentsController {
  Service = new CommentsService()
  getAllCommentsByPostId = async (req, res, next) => {
    try {
      const { post_id } = req.params
      const response = await this.Service.getCommentsByPostId(post_id)
      res.json({
        message: 'All comments from post',
        data: response
      })
    } catch (error) {
      next(error)
    }
  }
  createComment = async (req, res, next) => {
    try {
      const { post_id } = req.params
      const { title, content } = req.body
      const response = await this.Service.createComment(title, content, post_id)
      res.json({
        message: 'Comment created',
        data: response
      })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = CommentsController