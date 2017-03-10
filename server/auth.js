const project = require('../config/project.config')
const axios = require('axios')

module.exports = {
  checkAuth: function(req) {
    return new Promise(function(resolve, reject) {
      if (req.body.auth) {
        var options = {
          headers: {
            'Cookie': req.body.auth,
            'Content-Type': 'application/json',
          }
        }
      } else {
        var options = {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      }
      axios.get(`${project.server_api_path}/getuser`, options)
        .then(function(body){
          resolve(body.data)
        })
        .catch(function(error){
          reject(error.response.data)
        })
      })
  },
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
