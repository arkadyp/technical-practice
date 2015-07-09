var fs = require('fs');
var path = require('path');

var CODE = __dirname+'/src';

function isDirectory(dir) {
  return fs.lstatSync(dir).isDirectory();
}

module.exports = {
    entry: fs.readdirSync(CODE).reduce(function (entries, dir) {
        if (isDirectory(path.join(CODE, dir))) {
            entries[dir] = path.join(CODE, dir, 'index.js');
        }
        return entries;
    }, {}),

    output: {
        path: 'build',
        filename: '[name].js',
    },

    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel'}
        ]
    }
};