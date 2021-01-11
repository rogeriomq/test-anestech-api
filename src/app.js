const express = require('express')
const logger = require('morgan')

const routes = require('./routes')
const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

/**
 * Injection app in routes function
 */
routes(app)

module.exports = app
