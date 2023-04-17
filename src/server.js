const express = require('express')
const morgan = require('morgan')
const ErrorHandler = require('./middlewares/error.middleware')
const database = require('./database/database')

const app = express()

/**
 * Middlewares
 */
database.sync({
  logging: console.log,
  force: true
})

app.use(morgan('dev'))
app.use(express.json())

app.use(require('./routes/router'))
app.use(ErrorHandler)

module.exports = app