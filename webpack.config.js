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
    entry: {
      "/": "./src/index.jsx",
      "../001/dist/": "./001/src/index.jsx",
      "../002/dist/": "./002/src/index.jsx",
      "../003/dist/": "./003/src/index.jsx"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name]script.bundle.js"
    },
    resolve: {extensions: ['.js', '.jsx']},
    mode: 'development',
    watch: true
  };