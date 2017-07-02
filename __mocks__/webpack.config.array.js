var path = require("path");
var directoryNamed = require("directory-named-webpack-plugin");

module.exports = [
    {
      entry: "./main.js",
      output: {
        filename: "main.build.js"
      },
      resolve: {
        plugins: [
          new directoryNamed()
        ]
      }
    },
    {
      entry: "./main.js",
      output: {
        filename: "main.build2.js"
      },
      resolve: {
        alias: {
          testAlias: path.resolve(__dirname, "alias/")
        }
      }
    }
  ]