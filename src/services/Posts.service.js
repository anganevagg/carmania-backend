const Post = require("../database/models/Post.model")
const User = require("../database/models/User.model")
const HttpError = require("../helpers/HttpError")

class PostsService {
  async createPost(title, content, user_id) {
    const foundUser = await User.findOne({
      where: {
        id: user_id
      }
    })
    if (!foundUser) throw new HttpError('User not found', 400)
    const createdPost = await Post.create({
      title,
      content,
      user_id
    })
    return createdPost
  }
  async getOnePostById(id) {
    const foundPost = await Post.findByPk(id)
    if (!foundPost) throw new HttpError('Post not found', 400)
    return foundPost
  }
  async getAllPosts() {
    const foundPosts = await Post.findAll()
    return foundPosts
  }
}

module.exports = PostsService