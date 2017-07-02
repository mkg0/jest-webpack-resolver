var path = require("path");
var directoryNamed = require("directory-named-webpack-plugin");

module.exports = function(){
  return {
    entry: "./main.js",
    output: {
      filename: "main.build.js"
    },
    resolve: {
      alias: {
        testAlias: path.resolve(__dirname, "alias/")
      },
      plugins: [
        new directoryNamed()
      ]
    }
  }
}