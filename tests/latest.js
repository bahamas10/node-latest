var latest = require('../'),
    p = require('../package.json');

latest.check_update(p, function(ret, msg) {
  console.log(msg);
  process.exit(ret);
});
