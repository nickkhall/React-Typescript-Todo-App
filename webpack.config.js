module.exports = {
  entry: './src/index.tsx',
  output: {
    path: __dirname,
    filename: 'dist/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: [ 'react', 'es2015' ] }
      },
      {
        test: /\.scss|sass$/,
        loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        query: { presets: [ 'react', 'es2015' ] }
      }
    ]
  },
  resolve: {
    extensions: [ '', '.js', '.jsx', '.ts', '.tsx' ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
