# bind-handler

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david_img]][david_site]

> Bind event handlers to this less verbose


## Install

```
$ npm install bind-handler
```


## Usage

```js
var bindHandler = require('bind-handler');

class A {
  constructor() {
    bindHandler(this);
  }

  handleClick() {
	// handler-prefix methods will be auto bound to this
	// Just like this.handleClick = this.handleClick.bind(this)
  }

  otherClick() {
	// other methods will not be auto bound to this
  }
}
//=>
```

## License

MIT © [C.T. Lin](https://github.com/chentsulin/bind-handler)

[npm-image]: https://badge.fury.io/js/bind-handler.svg
[npm-url]: https://npmjs.org/package/bind-handler
[travis-image]: https://travis-ci.org/chentsulin/bind-handler.svg
[travis-url]: https://travis-ci.org/chentsulin/bind-handler
[coveralls-image]: https://coveralls.io/repos/chentsulin/bind-handler/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/r/chentsulin/bind-handler?branch=master
[david_img]: https://david-dm.org/chentsulin/bind-handler.svg
[david_site]: https://david-dm.org/chentsulin/bind-handler

