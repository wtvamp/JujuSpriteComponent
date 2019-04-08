const path = require('path');
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');
module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('awesome-typescript-loader'),
  },
  {
    test: /\.scss?$/,
    loaders: [
        "style-loader", 
        "typings-for-css-modules-loader?modules&sass&namedExport&camelCase", 
        "sass-loader"
    ],
    exclude: /node_modules/,
  }
  );
  config.plugins.push(new TSDocgenPlugin());
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};