var browserSync = require('browser-sync');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfigBuilder = require('../webpack.config');
var webpackConfig = webpackConfigBuilder('development');

var bundler = webpack(webpackConfig);

browserSync({
  server: {
    baseDir: 'src',

    middleware: [
      webpackDevMiddleware(bundler, {
        publicPath: webpackConfig.output.publicPath,
        stats: { colors: true },
        noInfo: true
      }),

      webpackHotMiddleware(bundler)
    ]
  },

  files: [
    'src/*.html'
  ]
});
