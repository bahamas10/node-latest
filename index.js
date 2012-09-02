var npm = require('npm'),
    util = require('util');

/**
 * get the latest version of a package
 */
module.exports = function(name, cb) {
  npm.load({name: name}, function(err) {
    if (err) return cb(err);
    npm.set('loglevel', 'silent', function() {});
    npm.commands.show([name, 'versions'], true, function(err, data) {
      if (err) return cb(err);
      var versions = data[Object.keys(data)[0]].versions,
          latest = versions[versions.length - 1];
      cb(null, latest);
    });
  });
};

/**
 * Convenience method
 *
 * Given a package.json style obj, determine if there are updates available
 *
 * Optionally, give true as a second argument to exit after writing the message
 */
module.exports.check_update = function (package, cb) {
  module.exports(package.name, function(err, v) {
    var s, ret = 0;
    if (err) {
      s = ">>> Couldn't determine latest version";
      ret = 2;
    } else if (v !== package.version) {
      s = util.format('>>> You are running version %s, a newer version %s is available\n', package.version, v);
      s += util.format('>>> Consider updating with: npm update -g %s', package.name);
      ret = 1;
    } else {
      s = util.format('You are running the latest version %s', package.version);
      ret = 0;
    }
    cb(ret, s);
  });
};
