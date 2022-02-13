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
            '@components': './src/components',
            '@modals': './src/modals',
            '@screens': './src/screens',
            '@utils': './src/utils'
          },
          extensions: ['.ts', '.tsx', 'web.ts', '.web.tsx']
        }
      ]
    ]
  };
};
