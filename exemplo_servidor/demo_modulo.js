var http = require('http');
var dt = require('./meumodulo');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("A data e hora atuais são: " + dt.minhaData());
  res.end();
}).listen(8080, () => {
    console.log("O servidor foi iniciado na porta 8080");
});