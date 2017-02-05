var request = require('request')
const project = require('../config/project.config')

module.exports = {
  getData: function(req) {
    return new Promise(function(resolve, reject) {
      var options = {
        url: `${project.server_api_path}${req.query.endpoint}`,
        headers: {
          'Cookie': req.query.auth,
          'Content-type': 'application/json',
        }
      };
      request(options, function(error, response, body) {
        if (error) return reject(error)
        resolve(body)
      })
    }).then(function(body){
      console.log(body)
      return body
    })
  }
}
