const { UUID, UUIDV4, STRING, TEXT, DATE, NOW } = require("sequelize");
const database = require("../database");

const Post = database.define("Post", {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true
  },
  user_id: {
    type: UUID,
    allowNull: false
  },
  title: {
    type: STRING,
    allowNull: false
  },
  content: {
    type: TEXT,
    allowNull: false
  },
  created_at: {
    type: DATE,
    defaultValue: NOW
  }
}, {
  tableName: "Posts",
  createdAt: 'created_at',
  updatedAt: false
})

module.exports = Post