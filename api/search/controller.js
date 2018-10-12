
const mongoose = require('mongoose')
const Employee = mongoose.model('Employee')
const SEARCH_QUERY_MAX_RESULTS = 20;

exports.search = (req, callback) => {

  let query = {};
  if(req.body.name){
    query = {
      name: {$regex: new RegExp(req.body.name, "ig")}
    }
  }

  //Cached 30s by default. Change by chaining .cache('seconds')
  let promise =  Employee
    .find(query)
    .limit(SEARCH_QUERY_MAX_RESULTS)
    .exec()

  Promise.resolve(promise).then(
    (matchedEmployees) => {
      callback(matchedEmployees)
    }
  )
}
