const fallback = require('express-history-api-fallback');
const express = require('express');
const gzip = require('compression');
const {CONFIG, PATHS} = require('./build/config');

const {APP_PORT, PUBLIC_PATH} = CONFIG;
const {REPORTS, DIST} = PATHS;

const app = express();

app.use(gzip());

app.use('/report/unit', express.static(`${REPORTS}/karma-html/report`));
app.use('/report/coverage', express.static(`${REPORTS}/coverage/Lcov-report`));

app.use(PUBLIC_PATH, express.static(DIST));
app.use(fallback('index.html', {root: DIST}));

app.listen(APP_PORT, (err) => {
	if (err) console.log(err);
	console.log(`SPA server at port: ${APP_PORT}`);
});
