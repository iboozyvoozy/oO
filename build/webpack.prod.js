const baseConfig = require('./webpack.base');
const webpack = require('webpack');
const merge = require('webpack-merge');
const {PATHS} = require('./config');

const ExtractPlugin = require('extract-text-webpack-plugin');
const NoErrorsPlugin = webpack.NoErrorsPlugin;
const DedupePlugin = webpack.optimize.DedupePlugin;
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

const {SRC} = PATHS;

const cfg = {
	watch: false,
	cache: false,
	debug: false,
	bail: true,
	devtool: 'source-map',
	output: {
		filename: '[name]-[chunkhash].js'
	},
	module: {
		loaders: [{
			test: /\.styl$/,
			loader: ExtractPlugin.extract('css!postcss!stylus'),
			include: [SRC]
		}, {
			test: /\.css$/,
			loader: ExtractPlugin.extract('css')
		}]
	},
	plugins: [
		new ExtractPlugin('[name]-[contenthash].css'),
		new NoErrorsPlugin(),
		new DedupePlugin(),
		new UglifyJsPlugin()
	]
};

module.exports = merge(baseConfig, cfg);
