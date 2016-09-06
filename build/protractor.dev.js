const baseConfig = require('./protractor.base');

const cfg = {
	debug: true,
	capabilities: {
		browserName: 'chrome'
	}
};

module.exports = Object.assign({}, baseConfig, cfg);
