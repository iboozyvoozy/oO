const requireEnv = require('require-environment-variables');
const webpack = require('webpack');
const {CONFIG, PATHS, utils} = require('./config');

const HtmlPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const EnvPlugin = webpack.EnvironmentPlugin;
const autoprefixer = require('autoprefixer');

const {PUBLIC_PATH, ASSETS_LIMIT, CLIENT_ENV_VARS} = CONFIG;
const {ROOT, SRC, DIST, PAGES, TEST} = PATHS;

requireEnv(CLIENT_ENV_VARS);

const cfg = {
	context: SRC,
	entry: {
		vendor: './vendor.js',
		main: './main.js'
	},
	output: {
		path: DIST,
		publicPath: PUBLIC_PATH
	},
	resolve: {
		extensions: [
			'',
			'.ts',
			'.js'
		],
		alias: {
			assets: utils.src('assets')
		}
	},
	module: {
		loaders: [{
			test: /\.ts$/,
			loader: 'ng-annotate!awesome-typescript!tslint',
			include: [SRC, TEST]
		}, {
			test: /\.js$/,
			loader: 'ng-annotate!babel!eslint',
			include: [SRC, TEST]
		}, {
			test: /\.json$/,
			loader: 'json'
		}, {
			test: /\.pug$/,
			loader: 'pug?pretty=true',
			include: [PAGES]
		}, {
			test: /\.pug/,
			loader: 'ng-cache?prefix=tpl/[dir]/[dir]!jade-html',
			include: [SRC],
			exclude: [PAGES]
		}, {
			test: /\.(svg|png|jpg|gif|eot|ttf|woff|woff2)$/,
			loader: `url?limit=${ASSETS_LIMIT}&name=[name]-[hash].[ext]`
		}]
	},
	postcss: [
		autoprefixer({
			browsers: ['last 2 versions']
		})
	],
	plugins: [
		new CleanPlugin([DIST], {
			root: ROOT
		}),
		new HtmlPlugin({
			filename: 'index.html',
			template: 'pages/index.pug'
		}),
		new EnvPlugin(CLIENT_ENV_VARS)
	]
};

module.exports = cfg;
