const dotenv = require('dotenv')

dotenv.config({
  path: ".env"
})

module.exports = {
  PORT,
  DB_URL,
  DB_HOST,
  DB_PORT,
  DB_PASSWORD,
  DB_NAME,
  DB_USER,
  EMAIL_USER,
  EMAIL_PASSWORD,
} = process.env