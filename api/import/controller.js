
const mongoose = require('mongoose')
const Employee = mongoose.model('Employee')

exports.import = (req, callback) => {
      let employees = new Employee(req.body)
			employees.save(callback)
}
