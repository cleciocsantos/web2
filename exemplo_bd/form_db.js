const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','index.html' ));
});

app.get('/formulario.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','formulario.html' ));
});
    
    /*else if(nomearquivo == "./registra"){
      let nome = q.query.nome;
      let email = q.query.email;
      let senha = q.query.senha;
      let db = new sqlite3.Database('./db/banco.db', (err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log('Conectou com o banco de dados!');
      });
    
      // insere um registro no banco de dados
      db.run(`INSERT INTO usuario(nome, email, senha) VALUES(?,?,?)`, [nome,email,senha], function(err) {
        if (err) {
          return console.log(err.message);
        }
        // Pega o id do último registro inserido
        console.log(`Registro feito com sucesso no id ${this.lastID}`);
      });
    
      db.close((err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log('Fechou a conexão com o banco de dados!');
      });
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write("<p>Registro efetuado com sucesso!</p>");
      res.write("<p><a href='/'>Voltar</a></p>");
      return res.end();
    } */
    
app.get('/ver_usuarios', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','consulta_usuarios.html' ));
});

app.post('/buscar-usuarios', (req, res) => {
  let db = new sqlite3.Database('./db/banco.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Conectou com o banco de dados!');
  });

  db.all(`SELECT * FROM usuario`, [], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }

    return res.status(200).json({
      status: 'success',
      message: 'Dados buscados com sucesso!',
      usuarios: rows
    });
  });

  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Fechou a conexão com o banco de dados!');
  });
});

app.post('/procurar', (req, res) => {
  const {nome} = req.body;
  let db = new sqlite3.Database('./db/banco.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Conectou com o banco de dados!');
  });

  db.all(`SELECT * FROM usuario WHERE nome = ?`, [nome], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }

    return res.status(200).json({
      status: 'success',
      message: 'Dados buscados com sucesso!',
      usuarios: rows
    });
  });

  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Fechou a conexão com o banco de dados!');
  });
});

app.listen(8080, () => {
  console.log('Servidor iniciado na porta 8080');
});


