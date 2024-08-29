var http = require('http');
var fs = require('fs');
var url = require('url');
http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var nomearquivo = "." + q.pathname;
    console.log("Nome do arquivo: " + nomearquivo);
    //console.log("Nome: " + q.nome + " E-mail: " + q.email + " Senha: " + q.senha);
  fs.readFile(nomearquivo, function(err, data) {
    if(err){
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Arquivo não encontrado!");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080, () => {
    console.log("O servidor foi iniciado na porta 8080");
});