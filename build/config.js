const dotEnv = require('dotenv');
const path = require('path');
const ROOT = process.cwd();

dotEnv.config({silent: true});

exports.CONFIG = {
	APP_PORT: envVar('APP_PORT', 9000),
	DEV_PORT: envVar('DEV_PORT', 9001),
	KARMA_PORT: envVar('KARMA_PORT', 9876),
	WD_HUB_URL: envVar('WD_HUB_URL', 'http://localhost:4444/wd/hub'),
	WD_HUB_BASE: envVar('WD_HUB_BASE', 'http://localhost:9000'),
	PUBLIC_PATH: envVar('PUBLIC_PATH', '/'),
	ASSETS_LIMIT: 1024 * 10, // 10KB
	CLIENT_ENV_VARS: []
};

exports.PATHS = {
	ROOT,
	SRC: root('src'),
	DIST: root('dist'),
	TEST: root('test'),
	PAGES: root('src/pages'),
	REPORTS: root('reports')
};

exports.utils = {
	root,
	src,
	fixOSX
};

function root (p = '') {
	return path.join(ROOT, p);
}

function src (p = '') {
	return path.join(exports.PATHS.SRC, p);
}

function fixOSX (blob) {
	return {
		pattern: blob,
		watched: false,
		included: true,
		served: true
	};
}

function envVar (name, defaults) {
	return process.env[name] || defaults;
}

