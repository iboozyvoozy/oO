const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');
const {PATHS} = require('./config');

const {SRC} = PATHS;

const cfg = {
	entry: {},
	plugins: [],
	devtool: 'inline-source-map',
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
