const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

mongooseCachebox(mongoose, {
	cache: true,
	ttl: 30
})

let EmployeeSchema = new Schema({
	name: {
		type: String,
		required: 'Name is required'
	}
})

module.exports = mongoose.model('Employee', EmployeeSchema)
