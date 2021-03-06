const controller = require('./controller')
const router = require('express').Router()
const requestDecorator = require('../request.decorator')
const upload = require("express-fileupload")

router.use(upload())
router.post('/', requestDecorator(controller.import))

module.exports = router
