/* eslint-disable id-length */

const DashboardPlugin = require('webpack-dashboard/plugin');
const ForkTsChecker = require('fork-ts-checker-webpack-plugin');
const Webpackmerge = require('webpack-merge');
const TailwindCSS = require('tailwindcss');
const Webpack = require('webpack');
const PATH = require('path');

const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin');

const UniversalConfiguration = require('./webpack.universal');

const defaultPort = 5000;

module.exports = Webpackmerge(UniversalConfiguration, {
	context: process.cwd(),
	devServer: {
		clientLogLevel: 'warning',
		compress: true,
		contentBase: PATH.resolve(process.cwd(), 'build/'),
		historyApiFallback: true,
		host: process.env.HOST || 'localhost',
		hot: true,
		inline: true,
		open: true,
		overlay: true,
		port: process.env.PORT || defaultPort,
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
						loader: 'file-loader',
						options: {
							name: '[name].css'
						}
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'vue-style-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							plugins: [TailwindCSS]
						}
					},
					{
						loader: 'css-loader?-url',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							sassOptions: {
								indentedSyntax: false
							}
						}
					}
				]
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
		new DashboardPlugin,
		new ForkTsChecker({
			eslint: true
		}),
		new Webpack.HotModuleReplacementPlugin
	]
});
