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
    extensions: ['', '.js']
  },
  module: {
    noParse: /es6-promise\.js$/,
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.js$/,
      exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
      loader: 'babel'
    }, {
      test: /\.css$/,
      loader: 'style!css!autoprefixer'
    }, {
      test: /\.(png|jpg|jpeg)$/,
      loader: 'url-loader?limit=8192'
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass?sourceMap'
    }, ]
  },
  // 服务器配置相关，自动刷新!
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    grogress: true,
  },
      // .vue的配置。需要单独出来配置
    vue: {
        loaders: {
            css: 'style!css!autoprefixer'
        }
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
