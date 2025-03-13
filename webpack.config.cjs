const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const TerserPlugin = require("terser-webpack-plugin");

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",

  entry: {
    runButtonClickEvent: "./events/runButtonClickEvent.js",

    agoClickEvent: "./events/agoClickEvent.js",

    firstRunStart: "./start/firstRunStart.js",

    frameChooseEvent: "./events/frameChooseEvent.js",
    validationModalButtonClick: "./events/validationModalButtonClick.js",

    clockFramesGenerator: "./components/clockFramesGenerator.js",
  },

  output: {
    filename: "[name].bundle.js",

    path: path.resolve(process.cwd(), "public"),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",

      favicon: "./assets/icons/favicon.png",

      minify: {
        collapseWhitespace: true,

        removeComments: true,

        removeRedundantAttributes: true,

        removeScriptTypeAttributes: true,

        removeStyleLinkTypeAttributes: true,

        useShortDoctype: true,
      },
    }),

    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],

  optimization: {
    minimize: true,

    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },

        extractComments: false,
      }),

      new CssMinimizerPlugin(),
    ],
  },

  module: {
    rules: [
      {
        test: /\.js$/,

        exclude: /node_modules/,

        use: {
          loader: "babel-loader",

          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },

      {
        test:  /\.s[ac]ss$/,

        use: ['style-loader', 'css-loader', 'sass-loader'],
      },

      {
        test: /\.css$/,

        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.svg$/,

        use: {
          loader: "file-loader",

          options: {
            name: "[name].[ext]",

            outputPath: "assets/icons",
          },
        },
      },

      {
        test: /\.(png|jpg|jpeg|gif)$/,

        use: {
          loader: "file-loader",

          options: {
            name: "[name].[ext]",

            outputPath: "assets/images",
          },
        },
      },
    ],
  },

  devtool: "source-map",
};
