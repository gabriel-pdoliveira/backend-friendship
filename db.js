const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'sql10.freemysqlhosting.net',
  user: 'sql10645378',
  password: 'GBuNJgP9MF',
  database: 'sql10645378',
});

connection.connect((err) => {
  if (err) {
    console.error('Erro na conexão com o MySQL:', err);
  } else {
    console.log('Conexão com o MySQL bem-sucedida');
  }
});

module.exports = connection;