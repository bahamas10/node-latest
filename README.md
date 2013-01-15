latest
======

Quickly determine the latest available version of a package in [npm](http://npmjs.org)

Useful for command line tools that want to check for available upgrades

Example
-------

Get the latest version number of `autocast`

``` js
var latest = require('latest');

latest('autocast', function(err, v) {
  console.log(v);
});
```
yields
```
0.0.3
```

Errors passed directly from npm

``` js
var latest = require('latest');

latest('i-hope-this-package-never-exists', function(err, v) {
  if (err) console.error(err.message);
});
```
yields
```
404 Not Found: i-hope-this-package-never-exists
```

### Convenience Function

Check for upgrades in an app

``` js
var latest = require('latest');
var p = require('./package.json');

latest.checkupdate(p, function(ret, message) {
  console.log(message);
  process.exit(ret);
});
```

#### checkupdate(package-json-obj, cb(ret, message))

A convenience method that will check for newer versions of a module in npm given a
`package.json` object as the first argument.

The callback fires with a return code suitable for exiting with, and a message to print

Install
------

    npm install latest

Tests
-----

    npm test

License
-------

MIT Licensed
