const baseConfig = require('./karma.base');

const cfg = Object.assign({}, baseConfig, {
	browsers: ['PhantomJS'],
	singleRun: false,
	autoWatch: true,
	autoWatchBatchDelay: 250
});

cfg.plugins.push('karma-phantomjs-launcher');

module.exports = config => config.set(cfg);
