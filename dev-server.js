import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import config from './webpack.config.js'

const serverOptions = {
  publicPath: config.output.publicPath,
  contentBase: 'src',
  hot: true,
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  },
  historyApiFallback: true,
  proxy: {
    '/api/*': 'http://localhost:' + (process.env.STAKEOUT_PORT || 5050)
  }
}

const compiler = webpack(config)
const webpackDevServer = new WebpackDevServer(compiler, serverOptions)

webpackDevServer.listen(config._hotPort, function(err) {
  if (err) {
    throw err
  }
  console.log('webpack dev server listening on %s', config._hotPort)
})
