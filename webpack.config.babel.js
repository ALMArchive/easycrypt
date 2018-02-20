import webpack from "webpack";
import path from "path";

export default {
  entry: {
    "easycrypt": "./easycrypt.js"
  },
  target: 'node',
  output: {
    library: "easycrypt",
    libraryTarget: "umd",
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|js)$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader"
        }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["eslint-loader"]
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ]
};
