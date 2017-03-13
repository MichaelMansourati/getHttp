var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };


function getAndPrintHTML (options) {

  var https = require('https');

  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      var allTheData = ''
      for (i = 0; i < data.length; i++) {
        allTheData += data[i];
      }
      console.log(allTheData);
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });

  });

}

getAndPrintHTML (options);