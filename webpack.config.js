var bourbon = require('node-bourbon').includePaths;

module.exports = {
  entry: './main.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.scss$/, loader: "style!css!sass?includePaths[]=" + JSON.stringify(bourbon) }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.json']
  }
}