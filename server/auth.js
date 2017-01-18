var request = require('request')
const project = require('../config/project.config')

module.exports = {
  checkAuth: function(req, res, next) {
    contactServer(req).then(function(result){
      data = JSON.parse(result)
      console.log(req.url)
      console.log(req.headers.cookie)
      console.log(data)
      if (data.LoggedIn == false) {
        res.redirect('/login.html')
      } else {
        next()
      }
    })
  },
  getData: function(req) {
    return new Promise(function(resolve, reject) {
      var options = {
        url: `${project.api_server_address}${req.query.endpoint}`,
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
      return body
    })
  }
}

function contactServer(req) {
  return new Promise(function(resolve, reject) {
    var options = {
      url: `${project.api_server_address}getuser`,
      headers: {
        'Cookie': req.headers.cookie
      }
    };
    request(options, function(error, response, body) {
      if (error) return reject(error)
      resolve(body)
    })
  }).then(function(body){
    return body
  })
}
