var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('formulario.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080, () => {
    console.log("O servidor foi iniciado na porta 8080");
});