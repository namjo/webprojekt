var http_objekt = require('http');
var fs_objekt = require('fs');

var mein_web_server = http_objekt.createServer(function(anfrage, antw) {
  console.log(anfrage.url);
  if ( anfrage.url == "/blabla" ) {
    fs_objekt.readFile("hallo.html", function (lesefehler, dateiinhalt) {
      antw.write(dateiinhalt);
      antw.end();
    });
  }
  console.log("Fertig!");
});

mein_web_server.listen(12345);
