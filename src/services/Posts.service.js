const { col } = require("sequelize")
const FavoritePost = require("../database/models/FavoritePost.model")
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
    const foundPosts = await Post.findAll({
      include: [{
        model: User,
        attributes: ['first_name', 'last_name']
      }]
    })
    return foundPosts
  }
  async markPostAsFavoriteById(user_id, post_id) {
    const foundUser = await User.findByPk(user_id)
    if (!foundUser) throw new HttpError('User not found', 400)
    const foundPost = await Post.findByPk(post_id)
    if (!foundPost) throw new HttpError('Post not found', 400)
    const foundFavoritePost = await FavoritePost.findOne({
      where: {
        user_id,
        post_id
      }
    })
    if (foundFavoritePost) throw new HttpError('Favorite post is already marked', 400)
    const createdFavoritePost = await FavoritePost.create({
      user_id,
      post_id
    })
    return createdFavoritePost
  }
  async getAllFavoritePosts(user_id) {
    // TODO: buscar si hay solucion
    const foundUser = await User.findByPk(user_id)
    if (!foundUser) throw new HttpError('User not found', 400)
    const foundFavoritePosts = await FavoritePost.findAll({
      where: {
        user_id
      },
      include: [{
        model: Post,
        where: {
          '$FavoritePost.id$': '$Post.id$'
        }
      }]
    })
    return foundFavoritePosts
  }
  async deleteFavoritePost(user_id, post_id) {
    const foundUser = await User.findByPk(user_id)
    if (!foundUser) throw new HttpError('User not found', 400)
    const foundPost = await Post.findByPk(post_id)
    if (!foundPost) throw new HttpError('Post not found', 400)
    const foundFavoritePost = await FavoritePost.findOne({
      where: {
        user_id,
        post_id
      }
    })
    if (!foundFavoritePost) throw new HttpError('Not in favorite post', 400)
    await foundFavoritePost.destroy()
    return true
  }
}

module.exports = PostsService