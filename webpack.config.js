import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';

export default {
	mode: 'development',
	entry: './src/index.js',
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
            }
        ]
    }
};
