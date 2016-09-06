const babelRegister = require('babel-register');
const {CONFIG, utils} = require('./config');

const {WD_HUB_URL, WD_HUB_BASE} = CONFIG;

const cfg = {
	seleniumAddress: WD_HUB_URL,
	baseUrl: WD_HUB_BASE,
	specs: [
		utils.root('test/e2e/index.js'),
		utils.root('test/e2e/**/*.js'),
		utils.root('src/**/*.e2e.js')
	],
	onPrepare: babelRegister,
	framework: 'jasmine'
};

exports.config = cfg;
