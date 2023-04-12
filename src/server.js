const express = require('express')
const morgan = require('morgan')

const app = express()

/**
 * Middlewares
 */
app.use(morgan('dev'))

app.use(require('./routes/router'))

module.exports = app