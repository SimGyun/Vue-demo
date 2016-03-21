var webpack = require('webpack')

module.exports = {
  entry: [
          './src/main.js'
  ],
  output: {
    publicPath: './src/build',
    path: './src/build',
    filename: 'build.js'
  },
  resolve: {
  	extensions: ['','.js']
  },
  module: {
    noParse: /es6-promise\.js$/,
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader: 'babel'
      },
      {
      	test:/\.css$/,
      	loader:'style-loader!css-loader'
      },
      {
      	test: /\.(png|jpg|jpeg)$/,
      	loader: 'url-loader'
      }
    ]
  },
  // plugins: [
  //       new webpack.DefinePlugin({    
  //           'process.env.NODE_ENV': '"development"'
  //         }),
  //       new webpack.HotModuleReplacementPlugin()
  // ],
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
} else {
  module.exports.devtool = '#source-map'
}
