const Comment = require("../database/models/Comment.model")
const Post = require("../database/models/Post.model")
const HttpError = require("../helpers/HttpError")
class CommentsService {
  async getCommentsByPostId(post_id) {
    const foundComments = await Comment.findAll({
      where: {
        post_id
      }
    })
    return foundComments
  }
  async createComment(title, content, post_id) {
    const foundPost = await Post.findByPk(post_id)
    if (!foundPost) throw new HttpError('post not found', 400)
    const createdComment = await Comment.create({
      title,
      content,
      post_id
    })
    return createdComment
  }
}

module.exports = CommentsService