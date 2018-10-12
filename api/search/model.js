const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

/*
* Remove this line if you don't want cache the search result.
* You can also remove cache by query basis by
* chaining .cache('seconds') to the query
*/
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
