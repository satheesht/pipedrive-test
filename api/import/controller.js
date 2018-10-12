
const mongoose = require('mongoose')
const Employee = mongoose.model('Employee')
const csvjson = require("csvjson")
const RECORD_CHUNK = 5000
const CSV_HEADERS = "id,name,age,address,team"

exports.import = (req, callback) => {

  employeesCsv = req.files.data.data.toString('utf8')
  let data = csvjson.toObject(employeesCsv,{
    headers: CSV_HEADERS
  })
  //Clear database before pushing new one
  Employee.deleteMany({}).then(() => {
    Employee.insertMany(data, callback)
  })
}
