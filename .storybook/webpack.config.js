const path = require('path');
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');
module.exports = (baseConfig, env, config) => {
  config.module.rules.push(
  {
    test: /\.(ts|tsx)$/,
    loader: require.resolve('awesome-typescript-loader'),
  },  
  {
    test: /\.scss?$/,
    use: [
      "style-loader",
      {
          loader: "@teamsupercell/typings-for-css-modules-loader"
      },
      {
          loader: "css-loader",
          options: {
              camelCase: true,
              modules: true
          }
      }
    ],
    exclude: /node_modules/,
  }
  );
  config.plugins.push(new TSDocgenPlugin());
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};