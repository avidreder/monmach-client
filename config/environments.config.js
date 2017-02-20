// Here is where you can define configuration overrides based on the execution environment.
// Supply a key to the default export matching the NODE_ENV that you wish to target, and
// the base configuration will apply your overrides before exporting itself.
module.exports = {
  // ======================================================
  // Overrides when NODE_ENV === 'development'
  // ======================================================
  // NOTE: In development, we use an explicit public path when the assets
  // are served webpack by to fix this issue:
  // http://stackoverflow.com/questions/34133808/webpack-ots-parsing-error-loading-fonts/34133809#34133809
  vagrant : (config) => ({
    compiler_public_path : 'http://192.168.50.4:8080',
    browser_client_path : 'http://192.168.50.4:8080',
    server_client_path : 'http://192.168.50.4:8080',
    browser_api_path: 'http://192.168.50.4:3000',
    server_api_path : 'http://192.168.50.4:3000',
    api_server_address : 'http://192.168.50.4:3000'
  }),
  development : (config) => ({
    compiler_public_path : 'https://app.monmach.com',
    browser_client_path : 'https://app.monmach.com',
    server_client_path : 'https://app.monmach.com',
    browser_api_path: 'https://api.monmach.com',
    server_api_path : 'https://api.monmach.com',
    api_server_address : 'https://api.monmach.com'
  }),

  // ======================================================
  // Overrides when NODE_ENV === 'production'
  // ======================================================
  production : (config) => ({
    compiler_public_path     : '/',
    browser_client_path : 'https://app.monmach.com',
    server_client_path : 'https://app.monmach.com',
    browser_api_path: 'https://api.monmach.com',
    server_api_path : 'https://api.monmach.com',
    api_server_address : 'https://api.monmach.com',
    compiler_fail_on_warning : false,
    compiler_hash_type       : 'chunkhash',
    compiler_devtool         : null,
    compiler_stats           : {
      chunks       : true,
      chunkModules : true,
      colors       : true
    }
  })
}
