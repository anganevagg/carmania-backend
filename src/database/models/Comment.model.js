const { UUID, UUIDV4, DATE, NOW, TEXT, STRING } = require("sequelize");
const database = require("../database");
const Post = require("./Post.model");

const Comment = database.define('Comment', {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true
  },
  title: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  content: {
    type: TEXT,
    validate: {
      notEmpty: true
    },
    allowNull: false
  },
  user_id: {
    type: UUID,
    allowNull: false
  },
  created_at: {
    type: DATE,
    defaultValue: NOW,
  }
}, {
  tableName: 'Comments',
  createdAt: 'created_at',
  updatedAt: false
})

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  sourceKey: 'id'
})

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  targetKey: 'id'
})

module.exports = Comment