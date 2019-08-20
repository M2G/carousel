const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const dateFormat = require('dateformat');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const pkg = require('./package.json');

module.exports = (env, argv) => {
  const plugins = [
    new webpack.ProvidePlugin({}),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 9002,
      files: [
        './public/src/css/*.scss',
        './public/src/js/*.js',
        './public/*.html'
      ],
      server: { baseDir: ['public'] }
    })
  ];
  if (argv.mode === 'production') {
    plugins.push(new UglifyJsPlugin({
      sourceMap: true
    }));
  }

  plugins.push(new webpack.BannerPlugin({
    banner: pkg.name + ' ' + pkg.version + ' built on: ' + dateFormat(new Date()) + ' [hash]'
  }));

  return {
    entry: [
      './public/src/js/main.js'
    ],
    devtool: 'source-map',
    output: {
      path: path.resolve(__dirname, 'public/build/js'),
      filename: 'main.js'
    },
    watch: true,
    externals: {},
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-airbnb']
          }
        }
      }]
    },
    optimization: {
      minimize: false
    },
    plugins: plugins
  };
};
