module.exports = {
  entry: './src/thumbtackstic.js',
  output: {
    library: 'Thumbtackstic',
    libraryTarget: 'umd',
    libraryExport: 'default',
    filename: 'thumbtackstic.min.js',
    globalObject: `(typeof self !== 'undefined' ? self : this)`
  }
};
