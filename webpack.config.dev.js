export default {
  devtool: 'eval-source-map',
  entry: './client/index.js',
  output: {
    path: __dirname + '/dist',
		filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      }
    ]
  }
};
