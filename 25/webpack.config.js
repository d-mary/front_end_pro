const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [miniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new TerserPlugin(),
    new htmlWebpackPlugin({ template: "./src/index.html" }),
    new miniCssExtractPlugin({
      filename: "main.css",
    }),
  ],
};
