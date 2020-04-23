const path = require("path")

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "app.js"
  },
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 9000,
    publicPath: "/dist/"
  }
}