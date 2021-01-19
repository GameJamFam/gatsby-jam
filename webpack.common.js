const path = require('path');
const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');

const webpack = require('webpack');
const WebpackModules = require('webpack-modules');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    entry: path.join(srcPath, 'app', 'index.ts'),
    output: {
        filename: '[name].[contenthash].js',
        path: distPath,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.s[ac]ss$/i,
                use: [{
                    loader: 'style-loader', // inject CSS to page
                  }, {
                    loader: 'css-loader', // translates CSS into CommonJS modules
                  },  {
                    loader: 'sass-loader' // compiles Sass to CSS
                  }]
              },
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    resolve: {
        plugins: [new TsconfigPathsPlugin()],
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new webpack.ProvidePlugin({
            PIXI: 'pixi.js' // makes dragonbones work
        }),
        new WebpackModules(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.html'),
            title: "Myrtle's Crossing - Gatsby Game Jam",
            inject: true
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: '**/*.!(ts|html)',
                    context: srcPath,
                    to: distPath + '/[folder]/[name].[ext]',
                    force: true,
                    globOptions: {
                        ignore: ['logo.png']
                    },
                    toType: 'template'
                }
            ]
        })
    ]
}