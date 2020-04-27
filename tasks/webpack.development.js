/* eslint-disable id-length */

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ForkTsChecker = require('fork-ts-checker-webpack-plugin');
const Webpackmerge = require('webpack-merge');
const TailwindCSS = require('tailwindcss');
const Webpack = require('webpack');
const DotENV = require('dotenv');
const PATH = require('path');

const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin');

const UniversalConfiguration = require('./webpack.universal');

const defaultPort = 5000;

DotENV.config({
	path: PATH.resolve(process.cwd(), 'dev.env')
});

module.exports = Webpackmerge(UniversalConfiguration, {
	context: process.cwd(),
	devServer: {
		clientLogLevel: 'warning',
		compress: true,
		contentBase: PATH.resolve(process.cwd(), 'build/'),
		historyApiFallback: true,
		host: process.env.DEV_HOST || 'localhost',
		hot: true,
		inline: true,
		open: true,
		overlay: true,
		port: process.env.DEV_PORT || defaultPort,
		stats: 'errors-only'
	},
	devtool: 'inline-source-map',
	mode: 'development',
	module: {
		rules: [
			{
				include: PATH.resolve(process.cwd(), 'src/'),
				loader: 'ts-loader',
				options: {
					transpileOnly: true,
					experimentalWatchApi: true
				},
				test: /\.ts$/
			},
			{
				test: /\.s[ca]ss$/i,
				use: [
					{
						loader: 'vue-style-loader'
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: [TailwindCSS]
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sassOptions: {
								indentedSyntax: false
							}
						}
					}
				]
			},
			{
				include: PATH.resolve(process.cwd(), 'src/'),
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
	},
	output: {
		path: PATH.resolve(process.cwd(), 'build/'),
		chunkFilename: '[id].chunk.js',
		filename: '[name].bundle.js'
	},
	plugins: [
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: PATH.resolve(process.cwd(), 'dist/'),
			verbose: true,
			dry: false
		}),
		new ForkTsChecker({
			eslint: true
		}),
		new VueLoaderPlugin,
		new Webpack.HotModuleReplacementPlugin
	]
});
