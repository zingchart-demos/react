var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: __dirname + '/main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: __dirname + '/main.js',
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react']
            }
          }
        }
      ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
   
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
};
