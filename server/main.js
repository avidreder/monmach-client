const express = require('express')
const bodyParser = require('body-parser')
const debug = require('debug')('app:server')
const webpack = require('webpack')
const webpackConfig = require('../config/webpack.config')
const project = require('../config/project.config')
const compress = require('compression')
const auth = require('./auth.js')
const data = require('./data.js')

const app = express()

// This rewrites all routes requests to the root /index.html file
// (ignoring file requests). If you want to implement universal
// rendering, you'll want to remove this middleware.
app.use(require('connect-history-api-fallback')())

// Apply gzip compression
app.use(compress())
app.use(bodyParser.urlencoded({extended: true}))
app.get('/api/getData', (req, res) => {
  data.getData(req)
  .then(function(body){
    res.status(200).send(body)
  })
  .catch(function(err){
    res.status(500).send(err)
  })
})
app.post('/api/checkAuth', (req, res) => {
  auth.checkAuth(req)
  .then(function(body){
    res.status(200).send(body)
  })
  .catch(function(err){
    res.status(500).send(err)
  })
})
app.post('/api/postData', (req, res) => {
  data.postData(req)
  .then(function(body){
    res.status(200).send(body)
  })
  .catch(function(err){
    res.status(500).send(err)
  })
})
// app.all('*/index.html', auth.checkAuth)
// ------------------------------------
// Apply Webpack HMR Middleware
// ------------------------------------
if (project.env === 'vagrant' || project.env ==='development') {
  const compiler = webpack(webpackConfig)

  debug('Enabling webpack dev and HMR middleware')
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath  : webpackConfig.output.publicPath,
    contentBase : project.paths.client(),
    hot         : true,
    quiet       : project.compiler_quiet,
    noInfo      : project.compiler_quiet,
    lazy        : false,
    stats       : project.compiler_stats
  }))
  app.use(require('webpack-hot-middleware')(compiler))

  // Serve static assets from ~/public since Webpack is unaware of
  // these files. This middleware doesn't need to be enabled outside
  // of development since this directory will be copied into ~/dist
  // when the application is compiled.
  app.use(express.static(project.paths.public()))
} else {
  debug(
    'Server is being run outside of live development mode, meaning it will ' +
    'only serve the compiled application bundle in ~/dist. Generally you ' +
    'do not need an application server for this and can instead use a web ' +
    'server such as nginx to serve your static files. See the "deployment" ' +
    'section in the README for more information on deployment strategies.'
  )

  // Serving ~/dist by default. Ideally these files should be served by
  // the web server and not the app server, but this helps to demo the
  // server in production.
  app.use(express.static(project.paths.dist()))
}

module.exports = app
