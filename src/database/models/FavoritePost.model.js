const { UUID } = require("sequelize");
const database = require("../database");
const Post = require("./Post.model");
const User = require("./User.model");

const FavoritePost = database.define('FavoritePost', {
  user_id: {
    type: UUID,
    allowNull: false
  },
  post_id: {
    type: UUID,
    allowNull: false
  }
}, {
  tableName: 'Favorite_Posts'
})

User.belongsToMany(Post, {
  foreignKey: 'user_id',
  through: FavoritePost
})

Post.belongsToMany(User, {
  foreignKey: 'post_id',
  through: FavoritePost
})

module.exports = FavoritePost