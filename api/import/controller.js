
const mongoose = require('mongoose')
const Employee = mongoose.model('Employee')
const csvjson = require("csvjson")
const RECORD_CHUNK = 5000

exports.import = (req, callback) => {

  employeesCsv = req.files.data.data.toString('utf8')
  let data = csvjson.toObject(employeesCsv,{
    delimiter: ',',
    quote: '"',
    headers: "id,name,age,address,team"
  })
  Employee.deleteMany({}).then(() => {
    Employee.insertMany(data, callback)
  })
  // for (let i = 0, j = data.length; i < j; i += RECORD_CHUNK) {
  //   const chunk = data.slice(i, i + RECORD_CHUNK)
  //   Employee.insertMany(chunk)
  // }
  // callback(null, {
  //   total: data.length
  // })
}
