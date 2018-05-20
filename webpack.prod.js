const merge = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const webpack = require('webpack');

const common = require('./webpack.common');

module.exports = merge(common, {

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new UglifyJsPlugin({
            sourceMap: true
        }),
        new HtmlWebPackPlugin({
            filename: "index.html",
            template: "./src/index.tpl.html"
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new FaviconsWebpackPlugin({
            logo: './src/assets/favicon.png',
            prefix: 'icons-[hash]/',
            emitStats: false,
            statsFilename: 'iconstats-[hash].json',
            persistentCache: true,
            inject: true,
            title: 'Lite Ninja',
            icons: {
                android: true,
                appleIcon: true,
                appleStartup: true,
                coast: true,
                favicons: true,
                firefox: true,
                opengraph: true,
                twitter: true,
                yandex: true,
                windows: true
            }
        })
    ],
    devServer: {
        progress: true,
        historyApiFallback: {
            disableDotRule: true
        },
        port: 3000,
        proxy: {
            '/api': {
                target: 'http://localhost:8090',
                changeOrigin: true,
                pathRewrite: {'^/api': ''},
            }
        }
    }
});