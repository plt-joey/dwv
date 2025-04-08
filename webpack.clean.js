const path = require('path');

// Little hack to make webpack clean a shared output folder
module.exports = {
  output: {
    filename: 'dwv.min.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  }
};