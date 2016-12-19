var request = require('request')

module.exports = {
  checkAuth: function(req, res, next) {
    contactServer(req).then(function(result){
      data = JSON.parse(result)
      console.log(req.url)
      console.log(req.headers.cookie)
      console.log(data)
      // if (data.LoggedIn == false) {
      //   res.redirect('http://localhost:3000')
      // }
      next()
    })
  }
}

function contactServer(req) {
  return new Promise(function(resolve, reject) {
    var options = {
      url: 'http://localhost:3000/getuser',
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
