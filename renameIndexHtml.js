var fs = require('fs');
fs.rename('./build/index.html', './build/200.html', function(err) {
  if ( err ) console.log('ERROR: ' + err);
});