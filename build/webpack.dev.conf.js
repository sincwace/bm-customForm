'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssTextPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
const os = require('os')
const HappyPack = require('happypack')
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)
const netWorkInterfaces = os.networkInterfaces()
var localIp = ''
Object.keys(netWorkInterfaces).map(i => {
	if (netWorkInterfaces[i].length > 0) {
		netWorkInterfaces[i].map((x, k) => {
			if (k === 1 && x.address !== '127.0.0.1') {
				localIp = x.address
			}
		})
	}
})
const devWebpackConfig = merge(baseWebpackConfig, {
	mode: 'development',
	module: {
		rules: utils.styleLoaders({
			hotReload: true,
			extract: true,
			sourceMap: config.dev.cssSourceMap,
			usePostCSS: true
		})
	},
	devtool: config.dev.devtool,
	devServer: {
		clientLogLevel: 'warning',
		historyApiFallback: {
			rewrites: [
				{ from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
			],
		},
		hot: true,
		contentBase: false,
		compress: true,
		host: localIp || config.dev.host,
		port: PORT || config.dev.port,
		open: config.dev.autoOpenBrowser,
		overlay: config.dev.errorOverlay ? { warnings: false, errors: true } : false,
		publicPath: config.dev.assetsPublicPath,
		proxy: config.dev.proxyTable,
		quiet: true,
		watchOptions: {
			poll: config.dev.poll,
		},
		stats: {
			timings: true,
			modules: false,
			assets: false,
			entrypoints: false,
			assetsSort: 'field',
			builtAt: false,
			cached: false,
			cachedAssets: false,
			children: false,
			chunks: false,
			chunkGroups: false,
			chunkModules: false,
			chunkOrigins: false,
			performance: true,
			errors: true,
			warnings: true,
		}
	},
	plugins: [
		new HappyPack({
			id: 'happyBabel', // 对于loaders id
			loaders: ['cache-loader', 'babel-loader?cacheDirectory=true'], // 是用babel-loader解析
			threadPool: happyThreadPool,
			verboseWhenProfiling: true // 显示信息
		}),
		new webpack.HotModuleReplacementPlugin(),
		new MiniCssTextPlugin({
			filename: utils.assetsPath('[name].css')
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true
		}),
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, '../static'),
				to: config.dev.assetsSubDirectory,
				ignore: ['.*']
			}
		]),
		new webpack.DefinePlugin({
			'process.env': JSON.stringify(process.env.NODE_ENV)
		})
	]
})

module.exports = new Promise((resolve, reject) => {
	portfinder.basePort = process.env.PORT || config.dev.port
	portfinder.getPort((err, port) => {
		if (err) {
			reject(err)
		} else {
			process.env.PORT = port
			devWebpackConfig.devServer.port = port
			devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
				compilationSuccessInfo: {
					messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
				},
				onErrors: config.dev.notifyOnErrors
					? utils.createNotifierCallback()
					: undefined
			}))

			resolve(devWebpackConfig)
		}
	})
})
