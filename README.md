# Frontend boilerplate 💩

[![NPM version][npm-img]][npm-url] [![Build Status][travis-img]][travis-url]

[![Test Coverage][coverage-img]][coverage-url] [![Code Climate][climate-img]][climate-url] [![Code Climate Issues][climate-issues-img]][climate-issues-url]

[![BitHound][bh-img]][bh-url] [![Dependency Status][dm-img]][dm-url] [![devDependency Status][dm-dev-img]][dm-dev-url]

[![Semantic Release][semantic-img]][semantic-url]

[npm-img]: https://badge.fury.io/js/febp.svg
[npm-url]: https://www.npmjs.com/package/febp
[travis-img]: https://travis-ci.org/iboozyvoozy/febp.svg
[travis-url]: https://travis-ci.org/iboozyvoozy/febp

[bh-img]: https://www.bithound.io/github/iboozyvoozy/febp/badges/score.svg
[bh-url]: https://www.bithound.io/github/iboozyvoozy/febp
[dm-img]: https://david-dm.org/iboozyvoozy/febp.svg
[dm-url]: https://david-dm.org/iboozyvoozy/febp
[dm-dev-img]: https://david-dm.org/iboozyvoozy/febp/dev-status.svg
[dm-dev-url]: https://david-dm.org/iboozyvoozy/febp#info=devDependencies

[coverage-img]: https://codeclimate.com/github/iboozyvoozy/febp/badges/coverage.svg
[coverage-url]: https://codeclimate.com/github/iboozyvoozy/febp/coverage
[climate-img]: https://codeclimate.com/github/iboozyvoozy/febp/badges/gpa.svg
[climate-url]: https://codeclimate.com/github/iboozyvoozy/febp
[climate-issues-img]: https://codeclimate.com/github/iboozyvoozy/febp/badges/issue_count.svg
[climate-issues-url]: https://codeclimate.com/github/iboozyvoozy/febp
[semantic-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release

## Javascripts

- `babel (preset-es2015)`
- `eslint (babel-parser)`
- `ng-annotate`

Usage example:

```
import {helper} from './utils';
```


## Styles

- `stylus`
- `stylint`

Usage example:

```
import './reset.styl;
```

## Templates

- `jade-html-loader`
- `ng-cache-loader`

Importing in JS:

```
import template from './tpl.pug';
angular.component('foo', {template});
```

Importing in DOM:

```
import './dir1/dir2/dir3/dir4/tpl.pug';
```
```
div(ng-include="'tpl/dir3/dir4/tpl.pug'")
```

## Static pages

- `pug-loader`

Add new plugin to webpack config:

```
new HtmlPlugin({
  filename: '404.html',
  template: 'pages/error.pug'
})
```

## Assets

- `url-loader`
- `file-loader`

Usage in JS:

```
import img from 'assets/logo.png';
```

Usage in styles:

```
.header-logo
  background: url('~/assets/logo.png')
```

Usage in templates:

```
img(src="assets/logo.png")
```

Usage in static pages:

```
img(src=require("assets/logo.png"))
```

## Unit tests

- `karma`
- `jasmine`

```
test/unit/index.js
test/unit/**/*.js
src/**/*.spec.js
```

## E2E tests

- `protractor`
- `jasmine`

```
test/e2e/index.js
test/e2e/**/*.js
src/**/*.e2e.js
```

## Coverage

- `istanbul`

Add your own settings to `coverage:check` script in `package.json`

```
istanbul check-coverage --statements 100 --branches 75 --functions 75 --lines 75
```

## Reports

- `localhost:9000/report/unit`
- `localhost:9000/report/coverage`

## Servers

Simple express SPA server

```
npm run serve
```

Livereload proxy-server ([browser-sync](https://github.com/BrowserSync/browser-sync))

```
npm run serve:dev
```

API mocks server ([json-server](https://github.com/typicode/json-server))

```
npm run serve:mocks
```

Selenium server for protractor

```
npm run serve:webdriver
```

## Development workflow

Incremental build + unit tests

```
npm run build:dev
npm run test:unit:dev
```

E2E tests

```
npm run test:e2e
```

## Production workflow

```
npm run validate
npm run build 
npm run test
```

## Environment

Create local version of .env file

```
mv .env.example .env 
```

For provide some env variables to client build via [EnvironmentPlugin](https://webpack.github.io/docs/list-of-plugins.html#environmentplugin),

add variables names to `config/build.js`

```
CLIENT_ENV_VARS: ['API_ENDPOINT', 'API_TOKEN']
```

and values to `.env` file:

```
API_ENDPOINT=https://api.site.com
API_TOKEN=secret
```

## TODO
- [ ] e2e watch mode
- [ ] e2e in travis
- [ ] e2e in Sauce Labs
- [ ] source-maps for units
- [ ] [documentation](https://github.com/angular/dgeni)

## Webpack 2
- [ ] HMR (`webpack-dev-server@2.1.0-beta.0`)
- [ ] `babel-preset-es2015-webpack` adds [tree shaking](http://www.2ality.com/2015/12/webpack-tree-shaking.html) features, but [doesn't works](https://github.com/olov/ng-annotate/issues/245) with `ng-annotate`.
- [ ] source-maps in production/unit/e2e with (`webpack@2.1.0-beta.15`)
- [ ] `SystemJS`
- [ ] `LoaderOptionsPlugin`
