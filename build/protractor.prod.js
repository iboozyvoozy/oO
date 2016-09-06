const baseConfig = require('./protractor.base');

const cfg = {
	debug: true,
	capabilities: {
		browserName: 'firefox'
	}
};

module.exports = Object.assign({}, baseConfig, cfg);
