const project = require('../config/project.config')
const axios = require('axios')

module.exports = {
  checkAuth: function(req, res, next) {
    const loginPage = `<h1>Login</h1><button><a href="${project.browser_api_path}/auth/spotify/start">Spotify</a></button>`
    contactServer(req)
      .then(function(result){
        if (result.data.LoggedIn == false) {
          res.status(401).send(loginPage)
        } else {
          next()
        }
      })
      .catch(function(error){
        res.status(401).send(loginPage)
      })
  }
}

function contactServer(req) {
  return new Promise(function(resolve, reject) {
    var options = {
      headers: {
        'Cookie': req.headers.cookie,
        'Content-Type': 'application/json',
      }
    }
    axios.get(`${project.server_api_path}/getuser`, options)
      .then(function(body){
        resolve(body)
      })
      .catch(function(error){
        reject(error)
      })
    })
}
