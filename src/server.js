const express = require('express')
const morgan = require('morgan')
const ErrorHandler = require('./middlewares/error.middleware')

const app = express()

/**
 * Middlewares
 */
app.use(morgan('dev'))
app.use(express.json())

app.use(require('./routes/router'))
app.use(ErrorHandler)

module.exports = app 