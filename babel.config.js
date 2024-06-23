module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      ["module-resolver", {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests'],
          '@assets': './src/assets',
          '@components': './src/components',
          '@styles': './src/styles',
          '@utils': './src/utils',
        },
      }]
    ]
  }
};
