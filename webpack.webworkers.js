const path = require('path');

module.exports = {
  entry: {
    jpgbaseline: './decoders/pdfjs/decode-jpegbaseline.js',
    jpglossless: './decoders/rii-mango/decode-jpegloss.js',
    jpg2000: './decoders/pdfjs/decode-jpeg2000.js',
    rle: './decoders/dwv/decode-rle.js'
  },
  output: {
    filename: '[name].decoder.min.js',
    library: {
      name: '[name]',
      type: 'umd'
    },
    globalObject: 'this',
    path: path.resolve(__dirname, 'dist'),
    chunkLoading: 'import-scripts',
  }
};