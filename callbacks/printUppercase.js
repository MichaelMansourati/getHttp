var getHTML = require('../httpFunctions');

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTMLUpperCase (html) {
  console.log(html.toUpperCase());
}

getHTML (options, printHTMLUpperCase);