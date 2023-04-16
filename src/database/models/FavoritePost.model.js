const { UUID } = require("sequelize");
const database = require("../database");
const Post = require("./Post.model");
const User = require("./User.model");

const FavoritePosts = database.define('FavoritePosts', {
  user_id: {
    type: UUID,
    allowNull: false
  },
  post_id: {
    type: UUID,
    allowNull: false
  }
}, {
  tableName: 'Favorite_Posts',
  timestamps: false
})

User.belongsToMany(Post, {
  through: FavoritePosts,
  foreignKey: 'user_id',
  as: 'User'
})

Post.belongsToMany(User, {
  through: FavoritePosts,
  foreignKey: 'post_id',
  as: 'Post'
})

module.exports = FavoritePosts