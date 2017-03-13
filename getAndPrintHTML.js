function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var https = require('https');

  https.get(requestOptions, function (response) {

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

getAndPrintHTML ();