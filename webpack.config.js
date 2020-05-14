const path = require("path")

module.exports = {
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ ".ts", ".js" ]
  },
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