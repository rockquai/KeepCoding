const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: path.resolve('src/main.js'),
    output: {
        path: path.resolve('bundle'),
        filename: 'main.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};
