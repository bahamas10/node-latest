var npm = require('npm');

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
