# Jest Webpack Resolver Plugin

It is a jest plugin for enchanging jest resolving behaviour to webpack resolver through any webpack config.


## Why?

webpack 2 provides some custom resolving opinions for enchanging resolving behaviours like [directory-named-webpack-plugin](https://github.com/shaketbaby/directory-named-webpack-plugin) and you can't match this kind of resolves with jest's default resolver and this plugins completely changing resolving rules.

With webpack resolving you don't have to worry about these resolving options:

```
resolve.alias
resolve.descriptionFiles
resolve.extensions
resolve.mainFields
resolve.mainFiles
resolve.modules
resolve.plugins
```

## Install
> Jest resolver option supported for jest >=20 versions.

install with yarn
```
yarn add jest-webpack-resolver -D
```

or install with npm
```
npm install jest-webpack-resolver -D
```

add to your jest configuration
```
{
  "resolver": "jest-webpack-resolver"
}
```

## Configuration

By default plugin tries to detect `webpack.config.js`. You can configure it from `package.json` or `jest.config.js` (or any other jest config file)

add `jestWebpackResolver` to your `package.json` file at root level:
```json
{
  "name": "",
  "version": "",
  "jestWebpackResolver": {
    "webpackConfig": "./path/to/webpack.config.js"
  }
}
```

or at your `jest.config.js` or `jest.config.json` file
```js
{
  // ...
  jestWebpackResolver: {
    webpackConfig: './path/to/webpack.config.js'
  }
}
```

to stop the 'Webpack Resolver using: ./...' message use the silent option
```json
{
  "jestWebpackResolver": {
    "silent": true,
    "webpackConfig": "./path/to/webpack.config.js"
  }
}
```
