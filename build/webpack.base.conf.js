'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function resolve(dir) {
	return path.join(__dirname, '..', dir)
}

module.exports = {
	context: path.resolve(__dirname, '../'),
	entry: {
		app: ['babel-polyfill', './src/main.js']
	},
	output: {
		path: config.build.assetsRoot,
		filename: utils.assetsPath('[name].js'),
		publicPath: process.env.NODE_ENV === 'production'
			? config.build.assetsPublicPath
			: config.dev.assetsPublicPath
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': resolve('src'),
			'static': resolve('static'),
			'components': resolve('src/components'),
			'router': resolve('src/router'),
			'store': resolve('src/store'),
			'views': resolve('src/views')
		}
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					transformAssetUrls: {
						video: ['src', 'poster'],
						source: 'src',
						img: 'src',
						image: 'xlink:href'
					}
				}
			},
			{
				test: /\.js$/,
				loader: 'happypack/loader?id=happyBabel',
				include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')],
				exclude: /(node_modules)/,
			},
			{
				test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('img/[name].[hash:7].[ext]')
				}
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('media/[name].[hash:7].[ext]')
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
				}
			}
		]
	},
	plugins: [
		new VueLoaderPlugin()
	],
	node: {
		setImmediate: false,
		dgram: 'empty',
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: 'empty'
	}
}
