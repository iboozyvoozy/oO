const {CONFIG, PATHS} = require('./config');

const {APP_PORT, DEV_PORT} = CONFIG;
const {DIST} = PATHS;

let cfg = {
	proxy: `localhost:${APP_PORT}`,
	port: DEV_PORT,
	files: DIST,
	open: false,
	notify: false,
	ghostMode: {
		forms: true,
		clicks: true,
		scroll: true
	}
};

module.exports = cfg;
