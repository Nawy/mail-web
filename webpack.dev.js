const merge = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebPackPlugin({
            filename: "index.html",
            template: "./src/index.tpl.html"
        })
    ],
    devServer: {
        progress: true,
        historyApiFallback: true,
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