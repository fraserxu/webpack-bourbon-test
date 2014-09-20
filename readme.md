webpack-bourbon-test
---------------------

### Running

```
$ npm i
$ webpack
```

### Code

```
var bourbon = require('node-bourbon').includePaths;

module.exports = {
  entry: './main.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.scss$/, loader: "style!css!sass?includePaths[]=" + bourbon }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.json']
  }
}
```


Thanks [@nickdima](https://github.com/nickdima) to help me figure it out.