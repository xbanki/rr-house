/* eslint-disable prefer-named-capture-group */
/* eslint-disable id-length */

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const WebpackMerge = require('webpack-merge');
const AutoPrefixer = require('autoprefixer');
const TerserPlugin = require('terser-webpack-plugin');
const TailwindCSS = require('tailwindcss');
const CopyPlugin = require('copy-webpack-plugin');
const CSSNano = require('cssnano');
const Webpack = require('webpack');
const Moment = require('moment');
const PATH = require('path');
const Git = require('git-rev-sync');

const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin');

const UniversalConfiguration = require('./webpack.universal');

const banner = {
	banner: `/*!
 *  @project        rrhouse.ee
 *  @name           [filebase]
 *  @author         xbanki <contact@xbanki.me>
 *  @build          ${Moment().format('llll')} ET
 *  @release        ${Git.long()} [${Git.branch()}]
 *  @copyright      Copyright (c) ${Moment().format('YYYY')} RR House
 */
`,
	entryOnly: true,
	raw: true
};

module.exports = WebpackMerge(UniversalConfiguration, {
	mode: 'production',
	module: {
		rules: [
			{
				exclude: /node_modules/,
				include: PATH.resolve(__dirname, '../src/'),
				loader: 'babel-loader',
				options: {
					plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-object-rest-spread'],
					presets: [
						[
							'@babel/preset-env',
							{
								corejs: {
									version: 3,
									proposals: true
								},
								modules: false,
								useBuiltIns: 'usage'
							}
						],
						'@babel/preset-typescript'
					]
				},
				test: /\.ts$/

			},
			{
				exclude: /node_modules/,
				include: PATH.resolve(__dirname, '../src/'),
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
						loader: 'vue-style-loader'
					},
					{
						loader: 'css-loader?-url',
						options: {
							sourceMap: false
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								AutoPrefixer({
									grid: 'autoplace'
								}),
								CSSNano({
									preset: [
										'default',
										{
											discardComments: {
												removeAll: true
											}
										}
									]
								}),
								TailwindCSS
							]
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: false,
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
	optimization: {
		splitChunks: {
			cacheGroups: {
				default: false,
				common: false,
				styles: {
					chunks: 'all',
					enforce: true,
					name: 'styles',
					test: /\.(s[ca]ss|css)$/
				}
			}
		},
		minimizer: [
			new TerserPlugin({
				cache: true,
				parallel: true,
				sourceMap: false
			})
		]
	},
	output: {
		path: PATH.resolve(process.cwd(), 'dist/'),
		chunkFilename: '[id].chunk.js',
		filename: '[name].bundle.js'
	},
	plugins: [
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: PATH.resolve(process.cwd(), 'dist/'),
			verbose: true,
			dry: false
		}),
		new CopyPlugin([
			{
				from: PATH.resolve(process.cwd(), 'LICENSE')
			}
		]),
		new VueLoaderPlugin,
		new Webpack.BannerPlugin(banner)
	]
});
