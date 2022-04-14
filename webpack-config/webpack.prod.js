/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    entry: {
        app: path.resolve(__dirname, '../src/main.tsx'),
        vendor: ['react', 'react-dom'],
    },
    output: {
        filename: 'script/[name].[contenthash:8].js',
        path: path.resolve(__dirname, '../dist'),
        clean: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name]_[contenthash:6].css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            title: 'HTML Production',
            template: './src/asset/index.html',
        }),
    ],
    optimization: {
        minimize: true,
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    cache: {
        buildDependencies: {
            // 将 config 添加为 buildDependency，以便在改变 config 时获得缓存无效
            config: [__filename],
            // 如果你有其他的东西被构建依赖，你可以在这里添加它们
            // 注意，webpack、加载器和所有从你的配置中引用的模块都会被自动添加
        },
    },
});
