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

// User.belongsTo(FavoritePosts, {
//   foreignKey: 'user_id',
//   targetKey: 'id'
// })

// FavoritePosts.hasOne(User, {
//   foreignKey: 'user_id',
//   sourceKey: 'id'
// })


// Post.belongsTo(FavoritePosts, {
//   foreignKey: 'post_id',
//   targetKey: 'id'
// })

// FavoritePosts.hasOne(Post, {
//   foreignKey: 'post_id',
//   sourceKey: 'id'
// })


module.exports = FavoritePosts