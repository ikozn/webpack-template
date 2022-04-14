/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin'); // 控制台输出
const WebpackBar = require('webpackbar'); //  打包进度条
// const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin');

// const smp = new SpeedMeasureWebpackPlugin();

const PORT = 8080;
const dev = merge(common, {
    mode: 'development',
    entry: path.resolve(__dirname, '../src/main.tsx'),
    output: {
        filename: '[name].[hash:8].dev.js',
        path: path.resolve(__dirname, '../dist'),
        clean: true,
        pathinfo: false, // 优化
    },
    devtool: 'eval', // 开发环境最高性能的 source map
    devServer: {
        static: './dist',
        open: true,
        compress: true,
        hot: true,
        port: PORT,
    },
    watchOptions: {
        // 最小化 watch 监控范围
        ignored: /node_modules/,
    },
    stats: 'errors-only',
    plugins: [
        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
                messages: [`You application is running here http://localhost:${PORT}`],
                // notes: ['Some additionnal notes to be displayed unpon successful compilation'],
            },
        }),
        new HtmlWebpackPlugin({
            title: 'HTML Development',
            template: './src/asset/index.html',
        }),
        new WebpackBar(),
    ],
    cache: {
        buildDependencies: {
            // 将 config 添加为 buildDependency，以便在改变 config 时获得缓存无效
            config: [__filename],
            // 如果你有其他的东西被构建依赖，你可以在这里添加它们
            // 注意，webpack、加载器和所有从你的配置中引用的模块都会被自动添加
        },
    },
});

module.exports = dev;
