
const mongoose = require('mongoose')
const Employee = mongoose.model('Employee')
const csvtojson = require("csvtojson")
const RECORD_CHUNK = 5000;

exports.import = (req, callback) => {
  employeesCsv = req.files.data.data.toString('utf8')
  csvtojson().fromString(employeesCsv).then( employees => {
    let i,j,temparray;
    for (i=0,j=employees.length; i<j; i+=RECORD_CHUNK) {
      temparray = employees.slice(i,i+RECORD_CHUNK);
      Employee.insertMany(temparray)
    }
  })
}
