import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';

export default {
	mode: 'development',
	entry: ['@babel/polyfill', './src/index.jsx'],
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    output: {
		filename: '[name].[contenthash].js',
        path: path.resolve('dist')
	},
    module: {
        rules: [
            {
                test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.m?jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            }
        ]
    }
};
