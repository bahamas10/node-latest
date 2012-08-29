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

Check for upgrades in an app

``` js
var latest = require('latest'),
    p = require('./package.json');

latest(p.name, function(err, v) {
  if (err) {
    console.warn("Couldn't determine latest version");
  } else if (v !== p.version) {
    console.warn('You are running version %s, a newer version %s is available', p.version, v);
    console.warn('Consider updating with: npm update %s', p.name);
  } else {
    console.log('You are running the latest version!');
  }
});
```

Install
------

    npm install latest

Tests
-----

    npm test

License
-------

MIT Licensed
