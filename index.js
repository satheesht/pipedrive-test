require('dotenv').config()
const express = require('express')
const app = express()
const config = require('./config')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const routes = require('./api/routes')
const url = require('url')

require('./api/model')

mongoose.Promise = global.Promise
mongoose.connect(config.dbUrl, {
  useNewUrlParser: true
})

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

routes.register(app)

app.listen(config.port)
console.log('Server Started On Port: ' + config.port)
