var webpack = require("webpack");

module.exports = {
  entry: {
    index: "./index"
  },
  output: {
    filename: "[name].bundle.js"
  },
  resolve: {
    alias: {
      'bmc': '../'
    },
  },
  plugins: [
  ]
}
