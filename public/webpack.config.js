const path = require('path');

module.exports = {
  entry: './src/index.js', // ponto de entrada do seu aplicativo
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist') // diretório de saída
  },
  mode: 'development', // ou 'production'
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
