module.exports = {
  entry: './src/thumb-tack.js',
  output: {
    library: 'thumb-tack',
    libraryTarget: 'umd',
    libraryExport: 'default',
    filename: 'thumb-tack.min.js',
    globalObject: `(typeof self !== 'undefined' ? self : this)`
  }
};
