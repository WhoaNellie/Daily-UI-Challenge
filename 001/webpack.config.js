let path = require("path");
module.exports = {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        } 
      ]
    },
    entry: "./src/index.jsx",
    output: {
        path: path.resolve("./dist/js"),
        filename: "script.bundle.js"
    },
    resolve: {extensions: ['.js', '.jsx']},
    mode: 'development',
    watch: true
  };