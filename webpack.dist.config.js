var webpack = require('webpack');
var path    = require('path');
var config  = require('./webpack.config');
var fs      = require('fs');
var WebpackGitHash = require('webpack-git-hash');


config.output = {
  filename: '[name].bundle.[githash].js',
  publicPath: '',
  path: path.resolve(__dirname, 'dist'),
  crossOriginLoading: 'anonymous',
};
config.mode = 'production',
config.plugins = config.plugins.concat([

  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),

  // Reduces bundles total size
  new webpack.optimize.UglifyJsPlugin({
    mangle: {

      // You can specify all variables that should not be mangled.
      // For example if your vendor dependency doesn't use modules
      // and relies on global variables. Most of angular modules relies on
      // angular global variable, so we should keep it unchanged
      except: ['$super', '$', 'exports', 'require', 'angular']
    }
  }),

  new WebpackGitHash({
    hashLength: 40,
    callback: function(versionHash) {
      var indexHtml = fs.readFileSync(`./dist/app.bundle.${versionHash}.js`, 'utf8');
      indexHtml = indexHtml.replace('!!sentry-git-hash!!', versionHash);
      fs.writeFileSync(`./dist/app.bundle.${versionHash}.js`, indexHtml);
    }
  }),
]);

module.exports = config;
