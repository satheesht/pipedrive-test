const mongoose = require('mongoose'),
      ObjectId = mongoose.Types.ObjectId

const errorAdapter = (error) => {
	if (error.name === 'ValidationError') {
		return {
			status: 400,
			message: error.message,
			errors: error.errors
		}
	}
	return error
}

const requestDecorator = (handler) => {
	return (req, res) => {
		if (req.params.id && !ObjectId.isValid(req.params.id)) {
			res.status(400)
			res.json({
				status: 400,
				message: 'Bad request: Invalid identifier'
			})
			return
		}
		handler(req, (err, result) => {
			if (err) {
				let error = errorAdapter(err)
				if (error.status) {
					res.status(error.status)
				}
				res.json(error)
			} else if (!result && ['get', 'put', 'delete'].indexOf(req.method.toLowerCase()) > -1) {
				res.status(404)
				res.json({
					status: 404,
					message: 'Not found'
				})
			} else if (!result && req.method.toLowerCase() === 'get') {

			} else {
				res.json(result)
			}
		})
	}
}

module.exports = requestDecorator
