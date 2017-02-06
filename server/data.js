var request = require('request')
const project = require('../config/project.config')
const axios = require('axios')
const querystring = require('querystring')

module.exports = {
  getData: function(req) {
    return new Promise(function(resolve, reject) {
      var options = {
        headers: {
          'Cookie': req.query.auth,
          'Content-Type': 'application/json',
        }
      }
      axios.get(`${project.server_api_path}${req.query.endpoint}`, options)
        .then(function(body){
          resolve(body.data)
        })
        .catch(function(error){
          reject(error.response.data)
        })
      })
  },
  postData: function(req) {
    return new Promise(function(resolve, reject) {
      const data = { data: req.body.payload }
      var options = {
        headers: {
          'Cookie': req.body.auth,
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      };
      axios.post(`${project.server_api_path}${req.body.endpoint}`, querystring.stringify(data), options)
        .then(function(body){
          resolve(body.data)
        })
        .catch(function(error){
          reject(error.response.data)
        })
    })
  }
}
