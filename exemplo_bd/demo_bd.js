const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./db/banco.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Conectou com o banco de dados!');
  });

  // insere um registro no banco de dados
  db.run(`INSERT INTO usuario(nome, email, senha) VALUES(?,?,?)`, ['Clécio','clecio@teste.com','123'], function(err) {
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    console.log(`Registro feito com sucesso no id ${this.lastID}`);
  });

  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Fechou a conexão com o banco de dados!');
  });