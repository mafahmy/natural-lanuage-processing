const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
module.exports = {
  mode: "production",
  entry: "./src/client/index.js",
  output: {
    libraryTarget: "var",
    library: "Client",
  },

  optimization: {
    minimizer: [new TerserPlugin({}), new OptimizeCssAssetsPlugin({})],
  },
  module: {
    rules: [
      {
        test: "/.js$/",
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html",
    }),

    new MiniCssExtractPlugin({ filename: "[name].css" }),

    new WorkboxPlugin.GenerateSW(),
  ],
};
