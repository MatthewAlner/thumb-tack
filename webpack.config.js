module.exports = {
  entry: './src/thumbtack.js',
  output: {
    library: 'thumbtack',
    libraryTarget: 'umd',
    libraryExport: 'default',
    filename: 'thumbtack.min.js',
    globalObject: `(typeof self !== 'undefined' ? self : this)`
  }
};
