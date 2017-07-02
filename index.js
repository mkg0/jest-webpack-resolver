const commandLineArgs = require("command-line-args");
const ResolverFactory = require("enhanced-resolve").ResolverFactory;
const pkgDir = require("pkg-dir");
const path = require("path");

const root = pkgDir.sync();
const cliOptions = commandLineArgs({ name: "config", type: String });
const packagejson = require(path.join(root, "package.json"));
const jestConfig = require(path.join(
  root,
  cliOptions.config ? cliOptions.config : "jest.config.js"
));

const options = (jestConfig && jestConfig["jestWebpackResolver"]) ||
(packagejson && packagejson["jestWebpackResolver"]) || {
  webpackConfig: "./webpack.config.js"
};
const webpackConfig = require(path.join(
  pkgDir.sync(),
  options["webpackConfig"]
));

const getWebpackResolveRules = function(webpackConfig) {
  if (Array.isArray(webpackConfig)) {
    var obj = {};
    webpackConfig.forEach(item =>
      Object.assign(obj, getWebpackResolveRules(item))
    );
    return obj;
  }
  if (typeof webpackConfig === "function") {
    const config = webpackConfig();
    return config ? getWebpackResolveRules(config) : {};
  } else {
    return webpackConfig.resolve || {};
  }
};

module.exports = function(value, options) {
  const resolver = ResolverFactory.createResolver(
    Object.assign(
      {
        fileSystem: require("fs"),
        useSyncFileSystemCalls: true
      },
      getWebpackResolveRules(webpackConfig) || {}
    )
  );
  return resolver.resolveSync({}, options.basedir, value);
};
