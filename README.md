# Jest Webpack Resolver Plugin

It is a jest plugin for enchanging jest resolving behaviour to webpack resolver through the `webpack.config.js`.


## Why not babel-plugin-module-resolver ?

babel working like a preprocessor and webpack 2 provides custom plugins for enchanging resolving behaviours like [directory-named-webpack-plugin](https://github.com/shaketbaby/directory-named-webpack-plugin).

## Install
Jest resolver option supported for jest >=20+ versions and 20+ versions didn't released yet. For now install @next version with `yarn install jest@next`

install dependency
```
npm install jest-webpack-resolver -D

//or

yarn add jest-webpack-resolver -D
```

add to jest configuration
```
"resolver": "jest-webpack-resolver"
```

by default plugin tries to detect `webpack.config.j` at your project root. If you want to change it add `jestWebpackResolver` property to your package.json:
```
  jestWebpackResolver: {
    "webpackConfig": {
      "./path/to/webpack.config.js"
    }
  }

```

