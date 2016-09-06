const baseConfig = require('./karma.base');

const cfg = Object.assign({}, baseConfig, {
	browsers: ['Firefox'],
	concurrency: 1,
	singleRun: true,
	autoWatch: false
});

cfg.plugins.push('karma-firefox-launcher');

module.exports = config => config.set(cfg);
