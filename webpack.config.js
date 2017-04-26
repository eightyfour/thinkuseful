'use strict'

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        // 'babel-polyfill',
        './src/app/app.js'
    ],
    output: {
        publicPath: '/',
        path: path.join(__dirname, '/dist'),
        filename: '[name].bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                // test: /\.less$/,
                // loader: "style!css!autoprefixer!less"
            }
        ]
    },
    devServer: {
        contentBase: "./src"
    }
};