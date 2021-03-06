/* eslint-disable prefer-named-capture-group */

const HTMLPlugin = require('html-webpack-plugin');
const PATH = require('path');

module.exports = {
	context: PATH.resolve(process.cwd()),
	entry: './src/index.ts',
	module: {
		rules: [
			{
				test: /\.svg$/,
				loader: 'svg-url-loader',
				options: {
					iesafe: true,
					stripdeclarations: true
				}
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				loader: 'url-loader',
				options: {
					limit: 8192
				}
			},
			{
				test: /\.html$/i,
				loader: 'html-loader',
				options: {
					attributes: false
				}
			}
		]
	},
	output: {
		libraryTarget: 'umd',
		pathinfo: false
	},
	plugins: [
		new HTMLPlugin({
			filename: 'index.html',
			inject: true,
			publicPath: './',
			template: 'src/html/template.html'
		})
	],
	resolve: {
		extensions: [
			'.css',
			'.sass',
			'.scss',
			'.ts',
			'.js',
			'.json',
			'.vue',
			'.html'
		],
		alias: {
			'@': PATH.resolve(process.cwd(), 'src/'),
			'vue$': 'vue/dist/vue.esm.js'
		}
	}
};
