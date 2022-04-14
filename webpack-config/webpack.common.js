/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const IS_DEV_MODE = process.env.NODE_ENV !== 'production';

module.exports = {
    module: {
        rules: [
            {
                test: /\.tsx$/,
                include: path.resolve(__dirname, '../src'), // 优化
                use: [
                    // {
                    //     loader: 'thread-loader',
                    //     options: {
                    //         workers: 3,
                    //     },
                    // },
                    {
                        loader: 'babel-loader', // 开启babel缓存
                        options: {
                            cacheDirectory: true,
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    IS_DEV_MODE ? 'style-loader' : MiniCssExtractPlugin.loader, // 不再需要style-loader，⽤MiniCssExtractPlugin.loader代替
                    'css-loader', // 编译css
                    'postcss-loader',
                ],
            },
            {
                test: /\.scss$/,
                use: [IS_DEV_MODE ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[hash][ext][query]',
                },
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[hash][ext][query]',
                },
            },
        ],
    },
    resolve: {
        symlinks: false,
        modules: [path.resolve(__dirname, '../node_modules')], // 指定目录，关闭逐层搜索
        extensions: ['.js', '.ts', '.tsx'],
        alias: {
            '@': path.join(__dirname, '../src'),
            react: path.resolve(__dirname, '../node_modules/react/umd/react.production.min.js'),
            'react-dom': path.resolve(__dirname, '../node_modules/react-dom/umd/react-dom.production.min.js'),
        },
        // 只采用 main 字段作为入口文件描述字段，以减少搜索步骤，如果找不到就无了
        mainFields: ['main', 'index'],
    },
    cache: {
        // 将缓存类型设置为文件系统
        type: 'filesystem',
    },
};
