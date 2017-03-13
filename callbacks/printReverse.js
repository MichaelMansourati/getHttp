var getHTML = require('../httpFunctions');

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printReverse (html) {
  console.log(html.split("").reverse().join(""));
}

getHTML (options, printReverse);