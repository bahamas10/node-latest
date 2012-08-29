var latest = require('../'),
    p = require('../package.json');

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
