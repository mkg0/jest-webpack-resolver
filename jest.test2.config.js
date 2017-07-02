const path = require("path");

module.exports = {
  resolver: "./index.js",
  verbose: true,
  jestWebpackResolver: {
    webpackConfig: "./__mocks__/webpack.config.func.js"
  }
};
