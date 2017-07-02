const ResolverFactory = require("enhanced-resolve").ResolverFactory;
const path = require("path");
const pkgDir = require('pkg-dir');

const packagejson = require(path.join(process.cwd(), "package.json"));
const config = (packagejson && packagejson["jestWebpackResolver"]) || {
  webpackConfig: "./webpack.config.js"
};
const webpackConfig = require(path.join(pkgDir.sync(), config["webpackConfig"]));

const getWebpackResolveRules = function(webpackConfig){
  if (Array.isArray(webpackConfig) ){
    var obj = {};
    webpackConfig.forEach(item=> Object.assign(obj, getWebpackResolveRules(item)));
    return obj;
  }
  if (typeof webpackConfig === "function"){
    const config = webpackConfig();
    return config ? getWebpackResolveRules(config) : {};
  } else {
    return webpackConfig.resolve || {};
  }
}

module.exports = function(value, options) {
  var resolver = ResolverFactory.createResolver(
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
