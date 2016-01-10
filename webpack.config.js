const path = require('path');

module.exports = {
  resolve: { extensions: ['', '.js', '.jsx', '.css'] },
  entry: [
    './client/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loaders: ['babel'], exclude: /node_modules/ },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader?modules&importLoaders=1', 'postcss-loader'], exclude: /node_modules/ }
    ]
  },
  devServer: {
    inline: true,
    historyApiFallback: true,
    port: 1337,
    contentBase: './public'
  }
};
