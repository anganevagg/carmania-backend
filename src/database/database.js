const { Sequelize } = require('sequelize')
const {
  DB_URL,
  DB_HOST,
  DB_USER,
  DB_PORT,
  DB_PASSWORD,
  DB_NAME
} = require('../config/config')

const options = {
  logging: false
}

const database = () => {
  if (!DB_URL || DB_URL === '') {
    return new Sequelize({
      dialect: "postgres",
      host: DB_HOST,
      port: DB_PORT,
      username: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      ...options
    })
  }
  return new Sequelize(DB_URL, {
    ...options
  })
}

module.exports = database()