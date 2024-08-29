var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = "Ano: " + q.ano + " Mes: " + q.mes + " Dia: " + q.dia;
  res.write(txt);
  res.end();
}).listen(8080, () => {
    console.log("O servidor foi iniciado na porta 8080");
});