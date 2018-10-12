const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

let EmployeeSchema = new Schema({
	id: {
		type: Number,
		required: 'ID is required'
	},
	name: {
		type: String,
		required: 'Name is required'
	},
	age: {
		type: Number
	},
	address: {
		type: String
	},
	team: {
		type: String,
    required: 'Team is required'
	}
})

module.exports = mongoose.model('Employee', EmployeeSchema)
