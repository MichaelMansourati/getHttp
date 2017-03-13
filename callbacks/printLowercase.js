var getHTML = require('../httpFunctions');

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTMLLowerCase (html) {
  console.log(html.toLowerCase());
}

getHTML (options, printHTMLLowerCase);