const { UUID, UUIDV4, STRING } = require("sequelize");
const database = require("../database");

const User = database.define("User", {
  id: {
    type: UUID,
    defaultValue: UUIDV4
  },
  email: {
    type: STRING,
    allowNull: false
  },
  password: {
    type: STRING,
    allowNull: false
  },
  first_name: {
    type: STRING,
    allowNull: false
  },
  last_name: {
    type: STRING,
    allowNull: false
  }
}, {
  tableName: "Users"
})

module.exports = User