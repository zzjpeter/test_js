const path = require("path");

module.exports = {
  entry: "./src/demo.ts",
  target: "node",
  devtool: "false",
  mode: 'development',
  node: {
    __filename: true,
    __dirname: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "."),
  },
};
