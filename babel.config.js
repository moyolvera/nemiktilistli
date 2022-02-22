module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@actions': './src/actions',
            '@components': './src/components',
            '@context': './src/context',
            '@hooks': './src/hooks',
            '@modals': './src/modals',
            '@screens': './src/screens',
            '@utils': './src/utils'
          },
          extensions: ['.ts', '.tsx', 'web.ts', '.web.tsx']
        }
      ],
      'react-native-reanimated/plugin'
    ]
  };
};
