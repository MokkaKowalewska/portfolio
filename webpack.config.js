const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.exec\.js$/,
        use: ["script-loader"],
      },
    ],
  },
  watch: true,
};
