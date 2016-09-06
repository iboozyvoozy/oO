const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');
const {PATHS} = require('./config');

const {SRC} = PATHS;

const cfg = {
	watch: true,
	cache: true,
	debug: true,
	devtool: 'inline-source-map',
	output: {
		pathinfo: true,
		filename: '[name].js'
	},
	module: {
		loaders: [{
			test: /\.styl$/,
			loader: 'style!css!postcss!stylus',
			include: [SRC]
		}, {
			test: /\.css$/,
			loader: 'style!css'
		}]
	}
};

module.exports = merge(baseConfig, cfg);
