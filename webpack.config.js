var path = require('path');
var webpack = require('webpack')

const envVars = require(
  process.env.NODE_ENV === 'production' ?
    './production.env.json'
    : './dev.env.json'
)

console.log('envVars', envVars)
module.exports = {
  entry: './handler.ts',
  target: 'node',
  plugins: [
    new webpack.DefinePlugin({
      'global.__global__config': JSON.stringify(envVars),
      foo: 'asdad'
    })
  ],
  module: {
    loaders: [
      { test: /\.ts(x?)$/, loader: 'ts-loader' }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx']
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: 'handler.js'
  },
};