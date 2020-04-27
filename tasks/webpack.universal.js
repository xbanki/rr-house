const HTMLPlugin = require('html-webpack-plugin');
const PATH = require('path');

module.exports = {
	context: PATH.resolve(process.cwd()),
	entry: './src/index.ts',
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
			'.vue'
		],
		alias: {
			'@': PATH.resolve(process.cwd(), 'src/'),
			'vue$': 'vue/dist/vue.esm.js'
		}
	}
};
