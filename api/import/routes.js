const controller = require('./controller')
const router = require('express').Router()
const requestDecorator = require('../request.decorator')

router.post('/', requestDecorator(controller.import))

module.exports = router
