'use strict'

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        ],
        rules :[
            {
                test: /\.html$/,
                use: 'raw-loader'
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true
        })
    ],
    devServer: {
        contentBase: "./dist"
    }
};