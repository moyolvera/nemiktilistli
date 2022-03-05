const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  config.resolve.alias['react-native-webview'] = 'react-native-web-webview';
  config.module.rules.push({
    test: /postMock.html$/,
    use: {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]'
      }
    }
  });

  return config;
};
