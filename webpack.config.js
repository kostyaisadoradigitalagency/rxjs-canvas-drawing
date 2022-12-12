const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/chart.js',


  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  devServer: {
    port: 4200
  },
  plugins: [
    new HTMLPlugin({
      template: './src/chart.html'
    })
  ]
}
