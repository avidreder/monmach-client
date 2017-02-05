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
        res.status(401).send(`<h1>Login</h1><button><a href="${project.browser_api_path}/auth/spotify">Spotify</a></button>`)
      } else {
        next()
      }
    })
  }
}

function contactServer(req) {
  return new Promise(function(resolve, reject) {
    var options = {
      url: `${project.server_api_path}/getuser`,
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
