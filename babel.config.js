module.exports = {
  presets: [
    'module:@react-native/babel-preset',
    // 'module:metro-react-native-babel-preset',
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          // This needs to be mirrored in tsconfig.json
          '@routes': './routes',
          '@components': './_components',
          '@config': './_config',
          '@helpers': './_helpers',
          '@assets': './_assets',
          '@pages': './pages',
        },
      },
    ],
  ],
}
