var latest = require('../'),
    packages = ['autocast', 'ampache', 'webamp', 'npm'];

packages.forEach(function(package) {
  latest(package, function(err, v) {
    if (err) throw err;
    console.log('>> %s %s', package, v);
  });
});
