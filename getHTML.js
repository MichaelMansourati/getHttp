var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };


function getHTML (options, callback) {

  var https = require('https');

  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      var allTheData = ''
      for (i = 0; i < data.length; i++) {
        allTheData += data[i];
      }
      callback(allTheData);
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });

  });

}

function printHTML (html) {
  console.log(html);
}


getHTML (options, printHTML);